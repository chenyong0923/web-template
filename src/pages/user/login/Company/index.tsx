import { TickOutlined } from '@pangu/icons-react';
import { history, useRequest } from '@umijs/max';
import { Button, Radio, Space } from 'antd';
import { useEffect, useState } from 'react';

import { getBasicTokenAccount } from '@/api';
import { BaseResponse } from '@/interfaces/base';
import { CookieKeyEnum, StorageUtils } from '@/utils';

import styles from './index.less';

import type { GetBasicTokenAccountResponse } from '@/api';
import type { OrganizationType } from '@/pages/user/login/interfaces';
import type { FC } from 'react';

interface CompanyProps {
  phone?: string;
  data?: OrganizationType[];
}

const Company: FC<CompanyProps> = ({ phone, data = [] }) => {
  // 当前选中的公司
  const [currentCompanyId, setCurrentCompanyId] = useState<number>();

  useEffect(() => {
    if (data?.length) {
      setCurrentCompanyId(data[0]?.id);
    }
  }, [data]);

  // 选择公司
  const { run: handleSelectCompany } = useRequest<
    BaseResponse<GetBasicTokenAccountResponse>
  >(getBasicTokenAccount, {
    manual: true,
    onSuccess(res) {
      StorageUtils.setCookie(CookieKeyEnum.Token, res);
      history.push('/');
    },
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>选择您的企业</h1>
      <p className={styles.desc}>请在下列表格中，选择您要登录的企业</p>
      <Radio.Group
        className={styles.list}
        value={currentCompanyId}
        onChange={(e) => {
          setCurrentCompanyId(e.target.value);
        }}
      >
        <Space style={{ width: '100%' }} direction="vertical">
          {data.map((item) => {
            return (
              <Radio.Button
                className={styles['list-item']}
                value={item.id}
                key={item.id}
              >
                {item.name}
                {currentCompanyId === item.id && (
                  <div className={styles['list-item-badge']}>
                    <TickOutlined className={styles['list-item-badge-icon']} />
                  </div>
                )}
              </Radio.Button>
            );
          })}
        </Space>
      </Radio.Group>
      <Button
        className={styles.btn}
        type="primary"
        size="large"
        block
        onClick={() => {
          handleSelectCompany({ phone, enterId: currentCompanyId });
        }}
      >
        进入后台
      </Button>
    </div>
  );
};
export default Company;
