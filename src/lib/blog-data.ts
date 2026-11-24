import * as staticDataModule from "../data/posts";
import { getSql } from "./db";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  dateLabel: string;
  readTime: string;
  publishedAt: string;
}

function extractRawStaticPosts(): any[] {
  const mod = staticDataModule as Record<string, unknown>;
  const candidate = mod.posts ?? mod.blogPosts ?? mod.articles ?? mod.default ?? [];
  return Array.isArray(candidate) ? candidate : [];
}

function formatDateLabel(input: unknown): string {
  if (!input) return "2026";
  const parsed = new Date(String(input));
  if (Number.isNaN(parsed.getTime())) return String(input);
  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatReadTime(input: unknown): string {
  if (typeof input === "number" && input > 0) return `${input} min read`;
  if (typeof input === "string" && input.trim()) {
    return input.includes("read") ? input.trim() : `${input.trim()} min read`;
  }
  return "4 min read";
}

function normalizeStaticPosts(): BlogPost[] {
  const rawList = extractRawStaticPosts();
  return rawList
    .filter((item) => item && typeof item.slug === "string" && typeof item.title === "string")
    .map((item, index) => {
      const rawDate = item.publishedAt ?? item.date ?? item.createdAt ?? "";
      return {
        slug: item.slug.trim(),
        title: item.title.trim(),
        excerpt: String(item.excerpt ?? item.description ?? item.summary ?? "").trim(),
        content: String(item.content ?? item.body ?? "").trim(),
        category: String(item.category ?? "Editorial").trim(),
        dateLabel: item.dateLabel ? String(item.dateLabel) : formatDateLabel(rawDate),
        readTime: formatReadTime(item.readTime ?? item.read_time),
        publishedAt: rawDate
          ? String(rawDate)
          : `2026-01-${String(Math.min(index + 1, 28)).padStart(2, "0")}T00:00:00.000Z`,
      };
    });
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const staticPosts = normalizeStaticPosts();

  try {
    const sql = getSql();
    const rows = await sql`
      SELECT
        slug,
        title,
        excerpt,
        content,
        category,
        read_time,
        created_at
      FROM blog_posts
      WHERE status = 'published'
      ORDER BY created_at DESC
    `;

    const dbPosts: BlogPost[] = (rows ?? []).map((row: any) => {
      const createdDate = row.created_at ? new Date(row.created_at) : new Date();
      return {
        slug: String(row.slug).trim(),
        title: String(row.title).trim(),
        excerpt: String(row.excerpt ?? "").trim(),
        content: String(row.content ?? "").trim(),
        category: String(row.category ?? "Editorial").trim(),
        dateLabel: formatDateLabel(createdDate),
        readTime: formatReadTime(row.read_time),
        publishedAt: createdDate.toISOString(),
      };
    });

    const mergedBySlug = new Map<string, BlogPost>();

    for (const post of dbPosts) {
      mergedBySlug.set(post.slug, post);
    }

    for (const post of staticPosts) {
      if (!mergedBySlug.has(post.slug)) {
        mergedBySlug.set(post.slug, post);
      }
    }

    return Array.from(mergedBySlug.values());
  } catch (error) {
    console.error("Failed to fetch published posts from database:", error);
    return staticPosts;
  }
}