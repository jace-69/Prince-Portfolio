import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
});