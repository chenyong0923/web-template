import homeRoutes from './modules/home';

import type { Route } from '@/interfaces/route';

const routes: Route[] = [
  {
    path: '/user',
    component: '@/layouts/LoginLayout',
    routes: [
      {
        path: 'login',
        component: '@/pages/user/login',
        name: '登录',
      },
      {
        path: 'password',
        component: '@/pages/user/password',
        name: '找回密码',
      },
      {
        path: '/user',
        exact: true,
        redirect: '/user/login',
      },
    ],
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    wrappers: [
      // '@/wrappers/SecurityWrapper',
      // '@/wrappers/RedirectWrapper',
      // '@/wrappers/AccessWrapper',
    ],
    routes: [homeRoutes],
  },
  {
    path: '/403',
    component: '@/pages/error/403',
  },
];

export default routes;
