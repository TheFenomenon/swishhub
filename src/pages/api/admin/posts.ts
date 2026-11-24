import type { APIRoute } from "astro";
import { getSql } from "../../../lib/db";

export const prerender = false;

function toSlug(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 90);
}

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export const GET: APIRoute = async () => {
  try {
    const sql = getSql();
    const rows = await sql`
      SELECT id, slug, title, excerpt, category, read_time, content, status, created_at
      FROM blog_posts
      ORDER BY created_at DESC
    `;
    return new Response(JSON.stringify({ posts: rows }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : "Failed to load posts.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const title = String(body.title || "").trim();
    const excerpt = String(body.excerpt || "").trim();
    const category = String(body.category || "Insights").trim();
    const content = String(body.content || "").trim();
    const status = body.status === "draft" ? "draft" : "published";
    const rawSlug = String(body.slug || "").trim();
    const slug = toSlug(rawSlug || title);

    if (!title || !excerpt || !content || !slug) {
      return new Response(
        JSON.stringify({
          error: "Title, excerpt, and article content are required.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const readTime =
      String(body.read_time || "").trim() || estimateReadTime(content);

    const sql = getSql();
    const [created] = await sql`
      INSERT INTO blog_posts (slug, title, excerpt, category, read_time, content, status)
      VALUES (${slug}, ${title}, ${excerpt}, ${category}, ${readTime}, ${content}, ${status})
      RETURNING id, slug, title, excerpt, category, read_time, content, status, created_at
    `;

    return new Response(JSON.stringify({ post: created }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const message =
      err instanceof Error && err.message.includes("unique")
        ? "A post with that slug already exists. Try a slightly different title or slug."
        : err instanceof Error
          ? err.message
          : "Failed to save post.";

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const idParam = url.searchParams.get("id");
    const id = Number(idParam);

    if (!Number.isInteger(id) || id <= 0) {
      return new Response(JSON.stringify({ error: "Invalid post ID." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const sql = getSql();
    await sql`DELETE FROM blog_posts WHERE id = ${id}`;

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : "Failed to delete post.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};