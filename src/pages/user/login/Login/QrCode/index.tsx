import { RotateOutlined } from '@pangu/icons-react';
import { useRequest } from '@umijs/max';
import { useGetState } from 'ahooks';
import { useEffect, useRef } from 'react';

import { getLoginOutCodeImage, getLoginOutCodeResearch } from '@/api';

import styles from './index.less';

import type {
  GetLoginOutCodeImageResponse,
  GetLoginOutCodeResearchResponse,
} from '@/api';
import type { BaseResponse } from '@/interfaces/base';
import type { FC } from 'react';

// 轮询频率
const POLLING_TIME = 3000;
// 过期时间
const EXPIRE_TIME = 5 * 60 * 1000;

interface QrCodeProps {
  onLogin?: (data: GetLoginOutCodeResearchResponse) => void;
}

const QrCode: FC<QrCodeProps> = ({ onLogin }) => {
  const timer = useRef<NodeJS.Timeout>();

  // 轮询时间
  const [duration, setDuration, getDuration] = useGetState<number>(0);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  // 二维码信息
  const { data: info } = useRequest<BaseResponse<GetLoginOutCodeImageResponse>>(
    getLoginOutCodeImage,
    {
      onSuccess(data) {
        createInterval(data.secret);
      },
    },
  );

  // 获取扫码生成的 token
  const { run: fetchStatus } = useRequest<
    BaseResponse<GetLoginOutCodeResearchResponse>
  >(getLoginOutCodeResearch, {
    manual: true,
    onSuccess(data) {
      if (data?.token) {
        clearTimer();
        onLogin?.(data);
      }
    },
  });

  // 创建定时器定时轮询获取扫码状态
  const createInterval = (secret?: string) => {
    if (timer.current) return;
    if (!secret) return;
    const t = setInterval(() => {
      if (getDuration() >= EXPIRE_TIME) {
        clearTimer();
        return;
      }
      fetchStatus({ secret });
      setDuration((cur) => cur + POLLING_TIME);
    }, POLLING_TIME);
    timer.current = t;
  };

  // 清除定时器
  const clearTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = undefined;
    }
  };

  // 重新开始定时器
  const restartInterval = () => {
    setDuration(0);
    createInterval(info?.secret);
  };

  return (
    <div className={styles.container}>
      {info?.qrUrl ? (
        <img className={styles.img} src={info.qrUrl} alt="二维码" />
      ) : null}
      {duration >= EXPIRE_TIME && info?.qrUrl ? (
        <div className={styles.mask} onClick={restartInterval}>
          <RotateOutlined className={styles.icon} />
          <div>二维码失效</div>
          <div>点击刷新</div>
        </div>
      ) : null}
    </div>
  );
};
export default QrCode;
