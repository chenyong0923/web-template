import { Navigate, Outlet, useLocation, useModel } from '@umijs/max';
import { useMemo } from 'react';

import { useAccess } from '@/hooks';

const AccessWrapper = () => {
  const { initialState } = useModel('@@initialState');
  const { pathname } = useLocation();

  const { hasAccess } = useAccess();

  const flag = useMemo(() => {
    const accessKey = initialState?.routeMap?.get(pathname)?.accessKey;
    if (!accessKey) {
      // 没有配置 accessKey 默认有权限
      return true;
    }
    return hasAccess(accessKey);
  }, [initialState?.routeMap, pathname, hasAccess]);

  return flag ? <Outlet /> : <Navigate to="/403" replace />;
};

export default AccessWrapper;
