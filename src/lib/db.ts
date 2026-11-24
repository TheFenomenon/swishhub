import { neon } from "@neondatabase/serverless";

export function getSql() {
  const url = import.meta.env.DATABASE_URL || process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not configured.");
  }
  return neon(url);
}