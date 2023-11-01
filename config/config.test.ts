import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    'process.env.ENV': 'test',
    'process.env.BASE_API': '/api',
  },
});
