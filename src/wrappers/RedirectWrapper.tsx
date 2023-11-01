import { findFirstLeafNode, listToTree } from '@pangu/utils';
import { Navigate, Outlet, useLocation, useModel } from '@umijs/max';
import { useMemo } from 'react';

import { useAccess } from '@/hooks';
import { getMenu } from '@/utils';

const RedirectWrapper = () => {
  const { initialState } = useModel('@@initialState');

  const { pathname } = useLocation();

  const { access } = useAccess();

  const firstMenu = useMemo(() => {
    if (!access.length) {
      return '/403';
    }
    const treeData = listToTree(access);
    const first = findFirstLeafNode(treeData, treeData[0]?.id);
    const route = getMenu(initialState?.routes ?? [], 'BasicLayout').find(
      (item) => item.accessKey === first?.key,
    );
    return route?.path ?? '/403';
  }, [initialState?.routes, access]);

  return pathname === '/' ? <Navigate to={firstMenu} replace /> : <Outlet />;
};

export default RedirectWrapper;
