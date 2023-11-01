import {
  ApproverFilled,
  ConstructionSiteEquipmentFilled,
  CustomFilled,
  MeetingFilled,
  PangZhanFilled,
  PurseFilled,
  SetUpFilled,
  TaskFilled,
} from '@pangu/icons-react';

import routes from '@/routes';

import type { MenuItem } from '@/interfaces/route';

import '@/styles/reset.less';

const iconMap = new Map([
  ['ApproverFilled', <ApproverFilled />],
  ['TaskFilled', <TaskFilled />],
  ['ConstructionSiteEquipmentFilled', <ConstructionSiteEquipmentFilled />],
  ['MeetingFilled', <MeetingFilled />],
  ['CustomFilled', <CustomFilled />],
  ['MeetingFilled', <MeetingFilled />],
  ['PangZhanFilled', <PangZhanFilled />],
  ['SetUpFilled', <SetUpFilled />],
  ['PurseFilled', <PurseFilled />],
]);

export async function getInitialState() {
  const _map = new Map<string, MenuItem>([]);

  const formatRoutes = (data: MenuItem[], parentPath = '') => {
    return data.map((route) => {
      let completePath = '';
      if (route.path.startsWith('/')) {
        // 如果这个路由的路径是以 / 开头的，那么就把这个路由的路径作为完整路径
        completePath = route.path;
      } else {
        // 把父路由的路径添加到当前路由的路径前面
        completePath = parentPath
          ? `${parentPath === '/' ? '' : parentPath}/${route.path}`
          : route.path;
      }

      // 把 icon 字符串转换成组件
      const icon = route.icon ? iconMap.get(route.icon as string) : null;

      const newRoute: MenuItem = {
        ...route,
        path: completePath,
        key: completePath,
        label: route.name,
        icon,
      };
      // 把这个路由添加到路由映射表中
      _map.set(completePath, newRoute);

      // 如果这个路由有子路由，递归地格式化这些子路由
      if (route.routes) {
        newRoute.children = formatRoutes(route.routes, completePath);
      }

      return newRoute;
    });
  };
  const _routes = formatRoutes(routes) ?? [];

  return {
    routeMap: _map,
    routes: _routes,
  };
}
