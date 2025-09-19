import { neon } from "@neondatabase/serverless";

const psql = neon(process.env.DATABASE_URL);

export { psql };
