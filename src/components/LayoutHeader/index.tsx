import { Image, Space } from 'antd';
import classnames from 'classnames';

import { User } from '@/components';

import type { CSSProperties, FC, ReactNode } from 'react';

import './index.less';

interface LayoutHeaderProps {
  className?: string;
  style?: CSSProperties;
  logo?: string;
  title?: ReactNode;
}

const prefixCls = 'm-layout-header';

const LayoutHeader: FC<LayoutHeaderProps> = ({
  className,
  style,
  logo = 'https://front.jiuworker.com/public/logo.png',
  title = '酒工哥用工',
}) => {
  return (
    <div className={classnames(prefixCls, className)} style={style}>
      <Space className={`${prefixCls}-left`}>
        <Image
          wrapperClassName={`${prefixCls}-logo`}
          src={logo}
          width={40}
          height={40}
          preview={false}
        />
        <h1 className={`${prefixCls}-title`}>{title}</h1>
      </Space>
      <div>
        <User />
      </div>
    </div>
  );
};

export default LayoutHeader;
