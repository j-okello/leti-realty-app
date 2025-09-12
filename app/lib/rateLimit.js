// app/lib/rateLimitService.js
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const RATE_LIMIT_CONFIG = {
  points: 7, // how many requests allowed
  duration: 60 * 60, // per 1 hour in seconds
  blockDuration: 60 * 60, // block for 1 hour if exceeded
  keyPrefix: "formLimiter",
  inMemoryFallback: true,
};

class RateLimitService {
  constructor(config = RATE_LIMIT_CONFIG) {
    this.config = config;
    this.localCache = new Map(); // For in-memory fallback
  }

  async checkRateLimit(ip) {
    const key = `${this.config.keyPrefix}:${ip}`;
    const blockKey = `${key}:blocked`;
    const now = Date.now();

    try {
      // 1. Check if IP is blocked
      const blockedUntil = await redis.get(blockKey);
      if (blockedUntil && now < Number(blockedUntil)) {
        return {
          allowed: false,
          retryAfter: Math.ceil((blockedUntil - now) / 1000),
          remainingPoints: 0,
          limit: this.config.points,
          reset: blockedUntil,
        };
      }

      // 2. Count attempts (INCR with expiry)
      const count = await redis.incr(key);

      if (count === 1) {
        // first request → set expiry
        await redis.expire(key, this.config.duration);
      }

      // 3. Check if exceeded
      if (count > this.config.points) {
        const blockUntil = now + this.config.blockDuration * 1000;
        await redis.set(blockKey, blockUntil, {
          ex: this.config.blockDuration,
        });

        return {
          allowed: false,
          retryAfter: this.config.blockDuration,
          remainingPoints: 0,
          limit: this.config.points,
          reset: blockUntil,
        };
      }

      // ✅ Allowed
      return {
        allowed: true,
        retryAfter: 0,
        remainingPoints: this.config.points - count,
        limit: this.config.points,
        reset: now + this.config.duration * 1000,
      };
    } catch (error) {
      console.error("redis rate limit error:", error.message);

      if (this.config.inMemoryFallback) {
        return this.checkRateLimitInMemory(ip);
      }

      // Default to allowing requests if redis fails
      return {
        allowed: true,
        retryAfter: 0,
        remainingPoints: this.config.points,
        limit: this.config.points,
        reset: now + this.config.duration * 1000,
      };
    }
  }

  // In-memory fallback implementation
  checkRateLimitInMemory(ip) {
    const now = Date.now();
    const key = `${this.config.keyPrefix}:${ip}`;

    if (!this.localCache.has(key)) {
      this.localCache.set(key, {
        attempts: [],
        blockedUntil: 0,
      });
    }

    const data = this.localCache.get(key);

    // Check if blocked
    if (data.blockedUntil && now < data.blockedUntil) {
      return {
        allowed: false,
        retryAfter: Math.ceil((data.blockedUntil - now) / 1000),
        remainingPoints: 0,
        limit: this.config.points,
        reset: data.blockedUntil,
      };
    }

    // Filter old attempts
    const windowStart = now - this.config.duration * 1000;
    data.attempts = data.attempts.filter((attempt) => attempt >= windowStart);

    // Check if limit exceeded
    if (data.attempts.length >= this.config.points) {
      data.blockedUntil = now + this.config.blockDuration * 1000;
      data.attempts = []; // Reset attempts when blocking

      return {
        allowed: false,
        retryAfter: this.config.blockDuration,
        remainingPoints: 0,
        limit: this.config.points,
        reset: data.blockedUntil,
      };
    }

    // Record attempt
    data.attempts.push(now);

    return {
      allowed: true,
      retryAfter: 0,
      remainingPoints: this.config.points - data.attempts.length,
      limit: this.config.points,
      reset: now + this.config.duration * 1000,
    };
  }

  async resetRateLimit(ip) {
    const key = `${this.config.keyPrefix}:${ip}`;
    const blockKey = `${key}:blocked`;

    try {
      await Promise.all([redis.del(key), redis.del(blockKey)]);
      this.localCache.delete(key);
      return true;
    } catch (error) {
      console.error("Error resetting rate limit:", error);
      return false;
    }
  }
}

// Singleton
const rateLimitService = new RateLimitService();
export default rateLimitService;
