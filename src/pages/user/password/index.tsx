import { VerificationCodeButton } from '@pangu/materials';
import { Checker } from '@pangu/utils';
import { history, Link, useRequest } from '@umijs/max';
import { Button, Form, message } from 'antd';
import { useRef } from 'react';

import { getAppAccountFindPassword, getBasicOutCode } from '@/api';
import { PASSWORD_REGEXP } from '@/assets/data/regexp';
import { Captcha } from '@/components';
import FormList from '@/components/FormList';
import { CookieKeyEnum, StorageUtils } from '@/utils';

import styles from './index.less';

import type { ActionType } from '@/components/Captcha';

// 手机号校验正则
const phoneRegExp = new Checker('phone').getRegExp();

const Page = () => {
  const [form] = Form.useForm();
  const phoneValue = Form.useWatch('phone', form);
  const captchaValue = Form.useWatch('captcha', form);

  const captchaRef = useRef<ActionType>(null);

  // 发送验证码
  const getValidateCode = async () => {
    try {
      const { phone, captcha } = form.getFieldsValue();
      const params = { phone, code: captcha };
      await getBasicOutCode(params);
      message.success('验证码发送成功');
      return true;
    } catch (err) {
      // 刷新验证码
      captchaRef.current?.refresh();
      return false;
    }
  };

  // 修改密码
  const { run: handleSubmit } = useRequest(getAppAccountFindPassword, {
    manual: true,
    onSuccess(_, params) {
      message.success('密码修改成功');
      history.push('/user/login');
      // 如果修改的是之前登录账号的密码，清除本地缓存
      const phone = StorageUtils.getCookie(CookieKeyEnum.Phone);
      if (phone === params[0].phone) {
        StorageUtils.removeCookie(CookieKeyEnum.Phone);
        StorageUtils.removeCookie(CookieKeyEnum.Password);
        StorageUtils.removeCookie(CookieKeyEnum.Token);
      }
    },
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>找回密码</h1>
      <FormList
        className={styles.form}
        form={form}
        onFinish={(values) => {
          const { phone, code, password } = values;
          handleSubmit({ phone, code, password });
        }}
        layout="vertical"
        formList={[
          {
            label: '手机号',
            name: 'phone',
            contentConfig: {
              renderType: 'input',
              placeholder: '请输入手机号',
            },
          },
          {
            label: '验证码',
            name: 'captcha',
            contentConfig: {
              renderType: 'input',
              placeholder: '请输入验证码',
              suffix: <Captcha ref={captchaRef} />,
            },
          },
          {
            label: '验证码',
            name: 'code',
            contentConfig: {
              renderType: 'input',
              placeholder: '请输入验证码',
              suffix: (
                <VerificationCodeButton
                  request={getValidateCode}
                  disabled={!phoneRegExp.test(phoneValue) || !captchaValue}
                />
              ),
            },
          },
          {
            label: '密码',
            name: 'password',
            contentConfig: {
              renderType: 'password',
              placeholder: '请设置8-20位密码，字母/数字/符号至少2种',
            },
            rules: [
              {
                pattern: PASSWORD_REGEXP,
                message: '请设置8-20位密码，字母/数字/符号至少2种',
              },
            ],
          },
          {
            style: { marginTop: '40px' },
            contentConfig: {
              renderType: 'custom',
              render: () => {
                return (
                  <Button size="large" type="primary" block htmlType="submit">
                    确认修改
                  </Button>
                );
              },
            },
          },
        ]}
      />
      <div className={styles.footer}>
        <Link to="/user/login">返回登录</Link>
      </div>
    </div>
  );
};

export default Page;
