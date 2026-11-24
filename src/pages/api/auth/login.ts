export const prerender = false;
import type { APIRoute } from "astro";
import crypto from "node:crypto";
import { COOKIE_NAME, createSessionToken } from "../../../lib/auth";



export const POST: APIRoute = async ({ request, cookies }) => {
  const adminPassword =
    import.meta.env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return new Response(
      JSON.stringify({ error: "Server admin password not configured." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: { password?: string } = {};
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const submitted = String(body.password || "");
  const a = Buffer.from(submitted);
  const b = Buffer.from(adminPassword);
  const isMatch = a.length === b.length && crypto.timingSafeEqual(a, b);

  if (!isMatch) {
    return new Response(JSON.stringify({ error: "Incorrect password." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const token = createSessionToken();
  cookies.set(COOKIE_NAME, token, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: import.meta.env.PROD,
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};