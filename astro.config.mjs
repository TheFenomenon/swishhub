
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://swishhub-swishhub.vercel.app',
  integrations: [sitemap()],
});
