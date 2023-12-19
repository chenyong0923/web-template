import { ProTableUtil } from '@pangu/materials';
import { Checker } from '@pangu/utils';
import { history } from '@umijs/max';
import CryptoJS from 'crypto-js';

import StorageUtils, { CookieKeyEnum, SessionStorageKeyEnum } from './storage';

import type { Route } from '@/interfaces/route';
import type { ReactNode } from 'react';

const proTableUtil = new ProTableUtil();

export { proTableUtil };
export { CookieKeyEnum, SessionStorageKeyEnum, StorageUtils };

export interface MenuItem extends Omit<Route, 'icon'> {
  children?: MenuItem[];
  icon?: ReactNode | string | undefined;
  key?: string;
  label?: string;
}

/**
 * 格式化路由，将路由对象转换成菜单组件可识别的格式
 * @param data 路由数据
 * @param layoutName 布局组件名
 * @returns 菜单项
 */
export const getMenu = (data: MenuItem[], layoutName: string) => {
  // 属于当前布局组件的菜单项
  const menuInLayout =
    data.filter((item) => item.component === `@/layouts/${layoutName}`)[0]
      ?.children ?? [];

  // 根据条件递归过滤路由
  const filterRoutes = (arr: MenuItem[]): MenuItem[] => {
    return arr
      .filter((item: MenuItem) => {
        const { hideInMenu, redirect } = item;
        return !redirect && !hideInMenu;
      })
      .map((obj) => {
        const ret: MenuItem = { ...obj };
        if (Array.isArray(obj.children)) {
          ret.children = filterRoutes(ret.children ?? []);
        }
        return ret;
      });
  };

  // 过滤掉所有不该显示的菜单项
  const menu = filterRoutes(menuInLayout);

  return menu;
};

/**
 * 退出登录
 */
export const logout = () => {
  StorageUtils.removeCookie(CookieKeyEnum.Token);
  history.push('/user/login');
};

/**
 * 数据加密
 * @param type 加密方式
 * @param value 需要加密的值
 * @returns 加密后的值
 */
export const encode = (type: 'md5', value: any) => {
  if (type === 'md5') {
    return CryptoJS.MD5(value).toString();
  }
  return value;
};

/**
 * 判断字符串是否为url
 * @param str 字符串
 * @returns 是否为url
 */
export const isUrl = (str: string) => {
  const urlChecker = new Checker('url');
  return urlChecker.test(str);
};
