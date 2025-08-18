// lib/rateLimit.js
import Redis from "ioredis";
import { RateLimiterRedis } from "rate-limiter-flexible";

// Create Redis client with proper error handling and fallbacks
const createRedisClient = () => {
  // Check if we have a Redis URL configured
  if (!process.env.REDIS_URL) {
    console.warn("REDIS_URL not configured. Rate limiting will be disabled.");
    return null;
  }

  try {
    const redisClient = new Redis(process.env.REDIS_URL, {
      // Add connection options for better reliability
      retryDelayOnFailover: 100,
      maxRetriesPerRequest: 3,
      lazyConnect: true,
      enableOfflineQueue: false,
      // Handle connection errors gracefully
      retryDelayOnClusterDown: 300,
      retryDelayOnFailover: 100,
    });

    // Handle connection errors
    redisClient.on("error", (err) => {
      console.error("Redis connection error:", err.message);
    });

    redisClient.on("connect", () => {
      console.log("Redis connected successfully");
    });

    return redisClient;
  } catch (error) {
    console.error("Failed to create Redis client:", error.message);
    return null;
  }
};

const redisClient = createRedisClient();

// Create rate limiter only if Redis is available
const rateLimiter = redisClient
  ? new RateLimiterRedis({
      storeClient: redisClient,
      keyPrefix: "formLimiter",
      points: 7, // 7 submissions
      duration: 60 * 60, // per hour
      blockDuration: 60 * 60, // block for 1 hour if exceeded
    })
  : null;

// In-memory fallback for when Redis is not available
const memoryStore = new Map();
const MEMORY_CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes

// Clean up old entries from memory store
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of memoryStore.entries()) {
    if (now - data.timestamp > 60 * 60 * 1000) {
      // 1 hour
      memoryStore.delete(key);
    }
  }
}, MEMORY_CLEANUP_INTERVAL);

async function checkRateLimitMemory(ip) {
  const key = `formLimiter:${ip}`;
  const now = Date.now();
  const hourAgo = now - 60 * 60 * 1000;

  let data = memoryStore.get(key) || {
    attempts: [],
    blocked: false,
    blockedUntil: 0,
  };

  // Remove old attempts
  data.attempts = data.attempts.filter((timestamp) => timestamp > hourAgo);

  // Check if still blocked
  if (data.blocked && now < data.blockedUntil) {
    return {
      allowed: false,
      retryAfter: Math.floor((data.blockedUntil - now) / 1000),
      remainingPoints: 0,
    };
  }

  // Reset block if time has passed
  if (data.blocked && now >= data.blockedUntil) {
    data.blocked = false;
    data.blockedUntil = 0;
  }

  // Check if limit exceeded
  if (data.attempts.length >= 7) {
    data.blocked = true;
    data.blockedUntil = now + 60 * 60 * 1000; // Block for 1 hour
    memoryStore.set(key, { ...data, timestamp: now });

    return {
      allowed: false,
      retryAfter: 3600, // 1 hour
      remainingPoints: 0,
    };
  }

  // Add current attempt
  data.attempts.push(now);
  memoryStore.set(key, { ...data, timestamp: now });

  return {
    allowed: true,
    retryAfter: 0,
    remainingPoints: 7 - data.attempts.length,
  };
}

export async function checkRateLimit(ip) {
  // Use Redis if available, otherwise fall back to memory
  if (rateLimiter && redisClient) {
    try {
      await rateLimiter.consume(ip);
      return { allowed: true, retryAfter: 0 };
    } catch (rejRes) {
      return {
        allowed: false,
        retryAfter: Math.floor(rejRes.msBeforeNext / 1000) || 60,
        remainingPoints: rejRes.remainingPoints || 0,
      };
    }
  } else {
    // Fallback to memory-based rate limiting
    console.log("Using memory-based rate limiting (Redis not available)");
    return await checkRateLimitMemory(ip);
  }
}
