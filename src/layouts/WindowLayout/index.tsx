import { Outlet } from '@umijs/max';

import LayoutHeader from '@/components/LayoutHeader';

import styles from './index.less';

import type { FC, PropsWithChildren } from 'react';

const WindowLayout: FC<PropsWithChildren> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <LayoutHeader />
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default WindowLayout;
