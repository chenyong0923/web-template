import { ICP } from '@pangu/materials';
import { Outlet } from '@umijs/max';
import { Space } from 'antd';
import classnames from 'classnames';

import IllustrationImage from '@/assets/images/illustration.jpg';
import LogoImage from '@/assets/images/logo.png';

import type { CSSProperties, FC } from 'react';

import './index.less';

interface LoginLayoutProps {
  className?: string;
  style?: CSSProperties;
}

const prefixCls = 'g-login-layout';

const LoginLayout: FC<LoginLayoutProps> = ({ className, style }) => {
  return (
    <div className={classnames(prefixCls, className)} style={style}>
      <div className={`${prefixCls}-left`}>
        <Space className={`${prefixCls}-left-title`} size={10}>
          <img
            className={`${prefixCls}-left-title-logo`}
            src={LogoImage}
            alt="logo"
          />
          <h1 className={`${prefixCls}-left-title-name`}>劳务管理平台</h1>
        </Space>
        <Space
          className={`${prefixCls}-left-content`}
          direction="vertical"
          size={20}
        >
          <img
            className={`${prefixCls}-left-content-img`}
            src={IllustrationImage}
            alt="插图"
          />
          <div className={`${prefixCls}-left-content-slogan`}>
            <p>灵活用工SaaS服务平台</p>
            <p>专为企业提供智能化灵活用工解决方案</p>
          </div>
        </Space>
        <ICP className={`${prefixCls}-left-icp`} />
      </div>
      <div className={`${prefixCls}-right`}>
        <div className={`${prefixCls}-right-content`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
