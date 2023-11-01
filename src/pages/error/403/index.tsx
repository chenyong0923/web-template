import { history } from '@umijs/max';
import { Button, Result } from 'antd';

import { useAccess } from '@/hooks';
import { logout } from '@/utils';

import styles from './index.less';

const Page = () => {
  const { access } = useAccess();

  return (
    <div className={styles.container}>
      <Result
        status="403"
        title="无权限"
        subTitle="你没有此页面的访问权限，请联系管理员"
        extra={
          access?.length ? (
            <Button
              type="primary"
              onClick={() => {
                history.push('/');
              }}
            >
              返回
            </Button>
          ) : (
            <Button type="primary" onClick={logout}>
              退出登录
            </Button>
          )
        }
      />
    </div>
  );
};

export default Page;
