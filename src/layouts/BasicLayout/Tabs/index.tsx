import { history, useLocation, useModel } from '@umijs/max';
import { Tabs as AntdTabs } from 'antd';
import { useEffect } from 'react';

import { Route } from '@/interfaces/route';

import styles from './index.less';

import type { FC, ReactNode } from 'react';

interface TabsProps {
  children?: ReactNode;
}

const Tabs: FC<TabsProps> = ({ children }) => {
  const { initialState } = useModel('@@initialState');
  const { historyStack, pushHistory, removeHistory } = useModel('global');

  const { pathname, search = '' } = useLocation();

  useEffect(() => {
    toggleRoute(pathname, search);
  }, [pathname, search]);

  // 切换路由
  const toggleRoute = (path: string, searchStr: string) => {
    const route = initialState?.routeMap.get(path);
    if (route) {
      pushHistory({ ...route, search: searchStr });
    }
  };

  return (
    <div className={styles.layout}>
      <AntdTabs
        className={styles.header}
        hideAdd
        type={historyStack.length <= 1 ? 'card' : 'editable-card'}
        activeKey={pathname}
        items={historyStack.map((item: Route) => ({
          ...item,
          key: `${item.path}`,
          label: item.name,
        }))}
        onEdit={(key) => {
          removeHistory(key as string);
          // 如果关闭当前显示的页面，跳转最后一个打开的页面
          if (key === pathname) {
            const lastItem = historyStack
              .filter((h: Route) => `${h.path}` !== key)
              .at(-1);
            if (lastItem) {
              history.push(`${lastItem.path}${lastItem.search || ''}`);
            } else {
              history.push('/');
            }
          }
        }}
        onTabClick={(key) => {
          const routeItem = historyStack.find((el) => el.path === key);
          if (routeItem) {
            history.push(`${routeItem.path}${routeItem.search}`);
          } else {
            history.push(key);
          }
        }}
      />
      <div className={styles.body}>{children}</div>
    </div>
  );
};
export default Tabs;
