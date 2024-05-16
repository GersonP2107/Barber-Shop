import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  routes: [
      {
        path: '/oauth2callback',
        load: () => import('./src/pages/oauth2callback.astro')
      }
    ]
  }
  

);

