import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://floresdelrosario.cl',
  output: 'static',
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'flores-rosario',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      apiVersion: process.env.PUBLIC_SANITY_API_VERSION || '2026-09-21',
      useCdn: true,
      studioBasePath: '/studio',
    }),
    react(),
  ],
});
