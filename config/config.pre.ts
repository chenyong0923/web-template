import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    'process.env.ENV': 'pre',
    'process.env.BASE_API': '/api',
  },
});
