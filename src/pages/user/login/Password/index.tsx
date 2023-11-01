import { Button, Form, message } from 'antd';

import { getAppAccountNewPassword } from '@/api';
import { PASSWORD_REGEXP } from '@/assets/data/regexp';
import FormList from '@/components/FormList';

import styles from './index.less';

import type { FC } from 'react';

interface PasswordProps {
  onSuccess?: () => void;
  phone: string;
}

const Password: FC<PasswordProps> = ({ onSuccess, phone }) => {
  const [form] = Form.useForm();

  // 表单提交
  const handleSubmit = async (values: any) => {
    try {
      const { password } = values;
      await getAppAccountNewPassword({ password, phone });
      message.success('密码设置成功');
      onSuccess?.();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>设置新密码</h1>
      <p className={styles.desc}>
        首次登陆用户，为了您的账户安全，请先重置您的登录密码
      </p>
      <FormList
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        validateTrigger="onBlur"
        formList={[
          {
            label: '新密码',
            name: 'password',
            contentConfig: {
              renderType: 'password',
              placeholder: '请设置8-20位密码，字母/数字/符号至少2种',
              style: { height: '44px' },
            },
            rules: [
              {
                pattern: PASSWORD_REGEXP,
                message: '请设置8-20位密码，字母/数字/符号至少2种',
              },
            ],
          },
          {
            contentConfig: {
              renderType: 'custom',
              render: () => {
                return (
                  <Button
                    className={styles.btn}
                    size="large"
                    type="primary"
                    block
                    htmlType="submit"
                  >
                    确认修改
                  </Button>
                );
              },
            },
          },
        ]}
      />
    </div>
  );
};

export default Password;
