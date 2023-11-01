import { Outlet, useModel } from '@umijs/max';
import { ConfigProvider } from 'antd';
import locale from 'antd/locale/zh_CN';
import classnames from 'classnames';

import LayoutHeader from '@/components/LayoutHeader';

import Aside from './Aside';
import styles from './index.less';
import Tabs from './Tabs';

import type { FC, PropsWithChildren } from 'react';

import 'dayjs/locale/zh-cn';

const BasicLayout: FC<PropsWithChildren> = () => {
  const { collapsed } = useModel('global');

  return (
    <ConfigProvider locale={locale}>
      <div className={styles.container}>
        <div className={styles.header}>
          <LayoutHeader />
        </div>
        <div className={styles.main}>
          <div
            className={classnames(styles.aside, {
              [styles.collapsed]: collapsed,
            })}
          >
            <Aside />
          </div>
          <div className={styles.content}>
            {/* 不需要 tabs 的把该组件删掉即可 */}
            <Tabs>
              <Outlet />
            </Tabs>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default BasicLayout;
