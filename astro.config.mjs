// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://swishmart.com.ng",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});