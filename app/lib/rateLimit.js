// lib/rateLimit.js
import Redis from "ioredis";
import { RateLimiterRedis, RateLimiterMemory } from "rate-limiter-flexible";

// Configuration constants
const RATE_LIMIT_CONFIG = {
  points: 7, // Number of points
  duration: 60 * 60, // Per hour (in seconds)
  blockDuration: 60 * 60, // Block for 1 hour if exceeded
  keyPrefix: "formLimiter", // Redis key prefix
  inMemoryFallback: true, // Enable in-memory fallback
  memoryCleanupInterval: 5 * 60 * 1000, // 5 minutes
};

class RateLimitService {
  constructor() {
    this.redisClient = null;
    this.rateLimiter = null;
    this.memoryStore = new Map();
    this.initialize();
  }

  async initialize() {
    await this.setupRedisClient();
    this.setupMemoryCleanup();
  }

  async setupRedisClient() {
    if (!process.env.REDIS_URL) {
      console.warn("REDIS_URL not configured. Redis rate limiting disabled.");
      return;
    }

    try {
      this.redisClient = new Redis(process.env.REDIS_URL, {
        retryStrategy: (times) => Math.min(times * 100, 5000),
        maxRetriesPerRequest: 3,
        enableOfflineQueue: false,
        connectTimeout: 5000,
      });

      this.redisClient.on("error", (err) => {
        console.error("Redis error:", err.message);
      });

      this.redisClient.on("connect", () => {
        console.log("Redis connected successfully");
        this.rateLimiter = new RateLimiterRedis({
          ...RATE_LIMIT_CONFIG,
          storeClient: this.redisClient,
        });
      });

      // Test the connection
      await this.redisClient.ping();
    } catch (error) {
      console.error("Redis connection failed:", error.message);
      this.redisClient = null;
    }
  }

  setupMemoryCleanup() {
    if (!RATE_LIMIT_CONFIG.inMemoryFallback) return;

    setInterval(() => {
      const now = Date.now();
      for (const [key, data] of this.memoryStore.entries()) {
        if (now - data.timestamp > RATE_LIMIT_CONFIG.duration * 1000) {
          this.memoryStore.delete(key);
        }
      }
    }, RATE_LIMIT_CONFIG.memoryCleanupInterval);
  }

  async checkRateLimitMemory(ip) {
    const key = `${RATE_LIMIT_CONFIG.keyPrefix}:${ip}`;
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_CONFIG.duration * 1000;

    let data = this.memoryStore.get(key) || {
      attempts: [],
      blockedUntil: 0,
    };

    // Clean up old attempts
    data.attempts = data.attempts.filter((t) => t > windowStart);

    // Check if blocked
    if (now < data.blockedUntil) {
      return {
        allowed: false,
        retryAfter: Math.ceil((data.blockedUntil - now) / 1000),
        remainingPoints: 0,
      };
    }

    // Check if limit exceeded
    if (data.attempts.length >= RATE_LIMIT_CONFIG.points) {
      data.blockedUntil = now + RATE_LIMIT_CONFIG.blockDuration * 1000;
      this.memoryStore.set(key, { ...data, timestamp: now });

      return {
        allowed: false,
        retryAfter: RATE_LIMIT_CONFIG.blockDuration,
        remainingPoints: 0,
      };
    }

    // Record attempt
    data.attempts.push(now);
    this.memoryStore.set(key, { ...data, timestamp: now });

    return {
      allowed: true,
      retryAfter: 0,
      remainingPoints: RATE_LIMIT_CONFIG.points - data.attempts.length,
    };
  }

  async checkRateLimit(ip) {
    try {
      // Try Redis first if available
      if (this.rateLimiter && this.redisClient?.status === "ready") {
        const res = await this.rateLimiter.consume(ip);
        return {
          allowed: true,
          retryAfter: 0,
          remainingPoints: res.remainingPoints,
        };
      }

      // Fallback to memory if enabled
      if (RATE_LIMIT_CONFIG.inMemoryFallback) {
        console.warn("Using in-memory rate limiting (Redis not available)");
        return this.checkRateLimitMemory(ip);
      }

      // Allow if no rate limiting available
      return { allowed: true, retryAfter: 0 };
    } catch (error) {
      if (error.msBeforeNext) {
        // Rate limit exceeded
        return {
          allowed: false,
          retryAfter: Math.ceil(error.msBeforeNext / 1000),
          remainingPoints: error.remainingPoints || 0,
        };
      }

      console.error("Rate limit check failed:", error.message);
      return { allowed: true, retryAfter: 0 }; // Fail open
    }
  }
}

// Singleton instance
const rateLimitService = new RateLimitService();

export async function checkRateLimit(ip) {
  return rateLimitService.checkRateLimit(ip);
}
