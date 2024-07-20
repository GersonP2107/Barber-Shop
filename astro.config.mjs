import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  routes: [{
    path: '/oauth2callback',
    load: () => import('./src/pages/oauth2callback.astro')
  }]
});