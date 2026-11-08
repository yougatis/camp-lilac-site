import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.camp-lilac.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // No lastmod: a build timestamp on every URL teaches Google to ignore the field. (Add a per-page value from git if needed.)
      filter: (page) => !/\/(thank-you|grazie|merci|danke|gracias|pay|payment-)/.test(page),
    }),
  ],
});
