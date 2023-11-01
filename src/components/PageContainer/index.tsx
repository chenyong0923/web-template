import { LeftOutlined } from '@pangu/icons-react';
import { history, useLocation, useModel } from '@umijs/max';
import { Space, Spin } from 'antd';
import classnames from 'classnames';
import { useMemo } from 'react';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.less';

interface PageContainerProps {
  className?: string;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  children?: ReactNode;
  title?: ReactNode;
  extra?: ReactNode;
  actions?: ReactNode;
  back?: boolean;
  loading?: boolean;
}

const prefixCls = 'm-page-container';

const PageContainer: FC<PageContainerProps> = ({
  className,
  style,
  children,
  title,
  extra,
  actions,
  back = false,
  bodyStyle,
  loading = false,
}) => {
  const { initialState } = useModel('@@initialState');
  const { pathname } = useLocation();

  const _title = useMemo(() => {
    // 如果传入了 title，那么就直接使用 title
    if (title) return title;
    // 否则根据当前路径从路由映射表中查找对应的路由
    const current = initialState?.routeMap.get(pathname);
    return current?.name;
  }, [title, initialState?.routeMap, pathname]);

  return (
    <div className={classnames(prefixCls, className)} style={style}>
      <div className={`${prefixCls}-header`}>
        <Space className={`${prefixCls}-header-title`}>
          {back ? (
            <LeftOutlined
              className={`${prefixCls}-header-title-back`}
              onClick={() => {
                history.back();
              }}
            />
          ) : null}
          <h4 className={`${prefixCls}-header-title-text`}>{_title}</h4>
          {extra ? (
            <div className={`${prefixCls}-header-title-extra`}>{extra}</div>
          ) : null}
        </Space>
        {actions ? (
          <div className={`${prefixCls}-header-actions`}>{actions}</div>
        ) : null}
      </div>
      <Spin spinning={loading}>
        <div style={bodyStyle} className={`${prefixCls}-body`}>
          {children}
        </div>
      </Spin>
    </div>
  );
};

export default PageContainer;
