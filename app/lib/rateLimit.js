// lib/rateLimit.js
import Redis from "ioredis";
import { RateLimiterRedis } from "rate-limiter-flexible";

const redisClient = new Redis(process.env.REDIS_URL);

const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "formLimiter",
  points: 7, // 5 submissions
  duration: 60 * 60, // per hour
  blockDuration: 60 * 60, // block for 1 hour if exceeded
});

export async function checkRateLimit(ip) {
  try {
    await rateLimiter.consume(ip);
    return { allowed: true, retryAfter: 0 }; // Explicitly set to 0 when allowed ;
  } catch (rejRes) {
    return {
      allowed: false,
      retryAfter: Math.floor(rejRes.msBeforeNext / 1000) || 60,

      remainingPoints: rejRes.remainingPoints,
    };
  }
}
