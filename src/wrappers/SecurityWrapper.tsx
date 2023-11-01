import { Navigate, Outlet, useModel } from '@umijs/max';
import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';

import { CookieKeyEnum, StorageUtils } from '@/utils';

const SecurityWrapper = () => {
  const { fetchUserInfo, fetchUserAccess } = useModel('user');

  const [loading, setLoading] = useState<boolean>(true);

  // 从 cookie 中获取 token
  const token = StorageUtils.getCookie(CookieKeyEnum.Token);

  // 获取用户信息
  useEffect(() => {
    if (token) {
      setLoading(true);
      Promise.all([fetchUserInfo(), fetchUserAccess()]).finally(() => {
        setLoading(false);
      });
    }
  }, []);

  if (!token) {
    return <Navigate to="/user/login" replace />;
  }

  return loading ? <Skeleton active /> : <Outlet />;
};

export default SecurityWrapper;
