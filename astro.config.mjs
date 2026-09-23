import { defineConfig } from 'astro/config';
import { SITE } from './src/site.ts';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  build: { format: 'directory' },
});
