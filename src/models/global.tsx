import { useEffect, useState } from 'react';

import { SessionStorageKey, StorageUtils } from '@/utils';

import type { MenuItem, Route } from '@/interfaces/route';

export default function useGlobalModel() {
  // 菜单栏是否折起
  const [collapsed, setCollapsed] = useState<boolean>(false);

  // 历史路由栈，用于 Tab 页签
  const [historyStack, setHistoryStack] = useState<Route[]>([]);

  useEffect(() => {
    // 从本地持久化中获取历史路由栈
    const _historyStack = StorageUtils.getSessionStorage(
      SessionStorageKey.HistoryStack,
    );
    if (_historyStack) {
      changeHistoryStack(JSON.parse(_historyStack));
    }
  }, []);

  // 更新历史路由栈
  const changeHistoryStack = (stack: Route[]) => {
    setHistoryStack(stack);
    // 存到本地持久化
    StorageUtils.setSessionStorage(
      SessionStorageKey.HistoryStack,
      JSON.stringify(stack),
    );
  };

  // 新增一条路由记录
  const pushHistory = (route: MenuItem) => {
    const { children, icon, ...rest } = route;
    const prevStack: Route[] = JSON.parse(
      StorageUtils.getSessionStorage(SessionStorageKey.HistoryStack) || '[]',
    );
    const index = prevStack.findIndex((s) => s.path === rest.path);
    // 如果已存在，不再添加, 把已有路由的search参数更新
    if (index > -1) {
      prevStack[index].search = rest.search;
      changeHistoryStack(prevStack);
    } else {
      // 如果不存在，添加
      const ret = [...prevStack, rest];
      changeHistoryStack(ret);
    }
  };

  // 删除一条路由记录
  const removeHistory = (path: string) => {
    const ret = historyStack.filter((item) => `${item.path}` !== path);
    changeHistoryStack(ret);
  };

  return {
    collapsed,
    setCollapsed,
    historyStack,
    pushHistory,
    removeHistory,
  };
}
