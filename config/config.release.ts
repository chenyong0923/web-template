import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    'process.env.ENV': 'release',
    'process.env.BASE_API': '/api',
  },
});
