import type { ReactNode } from 'react';

// 路由文件中的类型
export interface Route {
  path: string;
  search?: string;
  component?: string;
  wrappers?: string[];
  name?: string;
  icon?: string;
  hideInMenu?: boolean;
  routes?: Route[];
  exact?: boolean;
  redirect?: string;
  selectedKey?: string;
  accessKey?: string;
}

export interface MenuItem extends Omit<Route, 'icon'> {
  children?: MenuItem[];
  icon?: ReactNode | string | undefined;
  key?: string;
  label?: string;
}
