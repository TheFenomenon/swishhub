import type { APIRoute } from "astro";
import { getSql } from "../../lib/db";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const path = String(body.path || "/").slice(0, 200);
    const eventType = String(body.eventType || "pageview").slice(0, 50);
    const referrer = body.referrer ? String(body.referrer).slice(0, 300) : null;

    // Ignore admin traffic so your own checks don't skew metrics
    if (path.startsWith("/admin")) {
      return new Response(null, { status: 204 });
    }

    const sql = getSql();
    await sql`
      INSERT INTO page_events (path, event_type, referrer)
      VALUES (${path}, ${eventType}, ${referrer})
    `;

    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 204 });
  }
};