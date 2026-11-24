import { defineMiddleware } from "astro:middleware";
import { COOKIE_NAME, verifySessionToken } from "./lib/auth";

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  const isAdminPage = pathname === "/admin" || pathname.startsWith("/admin/");
  const isLoginPage = pathname === "/admin/login" || pathname === "/admin/login/";
  const isProtectedAdminApi =
    pathname.startsWith("/api/admin/") &&
    pathname !== "/api/admin/login" &&
    pathname !== "/api/admin/logout";

  if ((isAdminPage && !isLoginPage) || isProtectedAdminApi) {
    const token = context.cookies.get(COOKIE_NAME)?.value;
    const isAuthenticated = verifySessionToken(token);

    if (!isAuthenticated) {
      if (isProtectedAdminApi) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }
      return context.redirect("/admin/login", 302);
    }
  }

  return next();
});