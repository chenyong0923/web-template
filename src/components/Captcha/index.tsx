import classnames from 'classnames';
import { forwardRef, useImperativeHandle, useState } from 'react';

import type { CSSProperties } from 'react';

import './index.less';

interface CaptchaProps {
  className?: string;
  style?: CSSProperties;
}

export interface ActionType {
  refresh: () => void;
}

const prefixCls = 'm-captcha';

// eslint-disable-next-line react/display-name
const Captcha = forwardRef<ActionType, CaptchaProps>(
  ({ className, style }, ref) => {
    useImperativeHandle(
      ref,
      () => ({
        refresh,
      }),
      [],
    );

    // 时间戳，用于更新验证码
    const [timestamp, setTimestamp] = useState<number>(Date.now());

    // 刷新验证码
    const refresh = () => {
      setTimestamp(Date.now());
    };

    return (
      <img
        className={classnames(prefixCls, className)}
        style={style}
        src={`${process.env.BASE_API}/app/account/out/login/code?t=${timestamp}`}
        alt="验证码"
        onClick={refresh}
      />
    );
  },
);

export default Captcha;
