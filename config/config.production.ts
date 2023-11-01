import { defineConfig } from '@umijs/max';

export default defineConfig({
  // TODO: 修改生产环境项目 OSS 地址
  publicPath: '/',
  define: {
    'process.env.ENV': 'production',
    'process.env.BASE_API': '/api',
  },
  extraBabelPlugins: [
    ['transform-remove-console', { exclude: ['error', 'warn'] }],
  ],
});
