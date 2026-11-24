import type { APIRoute } from "astro";
import { COOKIE_NAME } from "../../../lib/auth";

export const prerender = false;

function clearSessionAndRedirect(cookies: Parameters<APIRoute>[0]["cookies"], redirect: Response["redirect"]) {
  cookies.delete(COOKIE_NAME, { path: "/" });
  return redirect("/admin/login", 302);
}

export const POST: APIRoute = async ({ cookies, redirect }) => {
  return clearSessionAndRedirect(cookies, redirect);
};

export const GET: APIRoute = async ({ cookies, redirect }) => {
  return clearSessionAndRedirect(cookies, redirect);
};