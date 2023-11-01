import { MenuFoldOutlined, MenuUnfoldOutlined } from '@pangu/icons-react';
import { history, useLocation, useModel } from '@umijs/max';
import { Menu } from 'antd';
import { useEffect, useMemo, useState } from 'react';

import { getMenu } from '@/utils';

import styles from './index.less';

import type { MenuItem } from '@/utils';
import type { ItemType } from 'antd/lib/menu/hooks/useItems';

const Aside = () => {
  // 菜单展开项
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const { initialState } = useModel('@@initialState');

  const { access } = useModel('user');
  const { collapsed, setCollapsed } = useModel('global');

  // 菜单数据
  const menu = useMemo(
    () => getMenu(initialState?.routes ?? [], 'BasicLayout'),
    [initialState?.routes],
  );

  // 有权限的菜单数据
  const menuWithAccess = useMemo(() => {
    const accessKeys = access.map((item) => item.key);
    const filterByAccess = (data: MenuItem[]) => {
      return data
        .map((item) => {
          if (!item.accessKey || accessKeys.includes(item.accessKey)) {
            const newItem: MenuItem = { ...item };
            if (item.children) {
              newItem.children = filterByAccess(item.children);
            }
            return newItem;
          }
          return undefined as any;
        })
        .filter(Boolean);
    };
    return filterByAccess(menu);
  }, [menu, access]);

  const { pathname } = useLocation();

  useEffect(() => {
    const [, root] = pathname.split('/');
    if (root && !openKeys.includes(`/${root}`)) {
      setOpenKeys([...openKeys, `/${root}`]);
    }

    const currentMenu = initialState?.routeMap.get(pathname);

    setSelectedKeys([currentMenu?.selectedKey || currentMenu?.key || pathname]);
  }, [initialState?.routeMap, pathname]);

  return (
    <div className={styles.aside}>
      <div className={styles.menu}>
        <Menu
          mode="inline"
          items={menuWithAccess as unknown as ItemType[]}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          inlineCollapsed={collapsed}
          onOpenChange={(keys) => {
            setOpenKeys(keys);
          }}
          onClick={({ key }) => {
            history.push(key);
          }}
        />
      </div>
      <div className={styles.actions}>
        {collapsed ? (
          <MenuUnfoldOutlined
            className={styles.btn}
            onClick={() => {
              setCollapsed(false);
            }}
          />
        ) : (
          <MenuFoldOutlined
            className={styles.btn}
            onClick={() => {
              setCollapsed(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Aside;
