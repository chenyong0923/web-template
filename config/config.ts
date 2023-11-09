import { defineConfig } from '@umijs/max';

import routes from '../src/routes';

export default defineConfig({
  title: '项目模版', // TODO: 修改项目名称
  favicons: ['https://front.lanseyizhan.com/public/favicon.ico'],
  publicPath: '/',
  hash: true,
  antd: {},
  request: {},
  model: {},
  initialState: {},
  define: {
    'process.env.ENV': 'test',
    'process.env.BASE_API': '/api',
  },
  proxy: {
    '/api': {
      target: 'http://10.0.2.183:6090',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  theme: {},
  routes,
  targets: {
    ie: 10,
  },
  fastRefresh: true,
  mfsu: {
    strategy: 'normal',
  },
  npmClient: 'pnpm',
  legacy: {},
});
