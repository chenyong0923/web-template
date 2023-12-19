import { VerificationCodeButton } from '@pangu/materials';
import { Checker, EnumUtil } from '@pangu/utils';
import { history, useRequest } from '@umijs/max';
import {
  Button,
  Checkbox,
  Divider,
  Form,
  message,
  Space,
  Typography,
} from 'antd';
import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import {
  getAppAccountFirstLogin,
  getBasicLoginAccount,
  GetBasicLoginAccountResponse,
  getBasicOutCode,
  getBasicOutCodeLogin,
} from '@/api';
import { Captcha, FormList } from '@/components';
import { CookieKeyEnum, encode, StorageUtils } from '@/utils';

import styles from './index.less';
import QrCode from './QrCode';

import type { ActionType } from '@/components/Captcha';
import type { FormItemList } from '@/components/FormList';
import type { BaseResponse } from '@/interfaces/base';
import type { OrganizationType } from '@/pages/user/login/interfaces';
import type { FC } from 'react';

interface LoginProps {
  onLogin?: (phone: string, orgList: OrganizationType[]) => void;
  onLoginFirst?: (isFirst: boolean) => void;
}

enum TabsEnum {
  '密码登录' = 'password',
  '验证码登录' = 'validate_code',
}

const tabs = EnumUtil.toList(TabsEnum);
// 手机号校验正则
const phoneRegExp = new Checker('phone').getRegExp();

const Login: FC<LoginProps> = ({ onLogin, onLoginFirst }) => {
  // 记住密码
  const [isRememberPassword, setIsRememberPassword] = useState(false);
  // 登录方式
  const [mode, setMode] = useState<TabsEnum>(TabsEnum['密码登录']);

  const captchaRef = useRef<ActionType>(null);

  const [form] = Form.useForm();
  const phoneValue = Form.useWatch('phone', form);
  const captchaValue = Form.useWatch('captcha', form);

  useEffect(() => {
    // 回显账号密码
    const phone = StorageUtils.getCookie(CookieKeyEnum.Phone);
    const password = StorageUtils.getCookie(CookieKeyEnum.Password);
    form.setFieldsValue({ phone, password });
    if (password) {
      setIsRememberPassword(true);
    }
  }, []);

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

  // 密码登录
  const { run: handlePasswordLogin } = useRequest<
    BaseResponse<GetBasicLoginAccountResponse>
  >(getBasicLoginAccount, {
    manual: true,
    onSuccess(data, params) {
      const { phone } = params[0];
      handleLoginSuccess(phone, data);
      if (isRememberPassword) {
        // 不从参数里取，因为参数里的密码被md5加密过了
        const password = form.getFieldValue('password');
        StorageUtils.setCookie(CookieKeyEnum.Phone, phone);
        StorageUtils.setCookie(CookieKeyEnum.Password, password);
      }
    },
  });

  // 验证码登录
  const { run: handleCodeLogin } = useRequest(getBasicOutCodeLogin, {
    manual: true,
    onSuccess(data, params) {
      const { phone } = params[0];
      handleLoginSuccess(phone, data);
    },
    onError() {
      // 刷新验证码
      captchaRef.current?.refresh();
    },
  });

  // 查询用户是否第一次登录
  const { run: getAccountFirstLogin } = useRequest(getAppAccountFirstLogin, {
    manual: true,
    onSuccess(data) {
      onLoginFirst?.(data);
    },
  });

  // 登录成功回调
  const handleLoginSuccess = (
    phone: string,
    data: GetBasicLoginAccountResponse,
  ) => {
    message.success('登录成功');
    const { token, enterPOList = [] } = data ?? {};
    StorageUtils.setCookie(CookieKeyEnum.Token, token);
    onLogin?.(phone, enterPOList);
    getAccountFirstLogin({ phone });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>欢迎登录</h1>
      <Space
        className={styles.tabs}
        split={<Divider type="vertical" className={styles['tabs-divider']} />}
      >
        {tabs.map(({ label, value }) => (
          <Button
            className={classnames(styles['tabs-item'], {
              [styles['tabs-item-active']]: mode === value,
            })}
            type="link"
            key={value}
            onClick={() => {
              setMode(value);
            }}
          >
            {label}
          </Button>
        ))}
      </Space>
      <FormList
        className={styles.form}
        form={form}
        onFinish={(values) => {
          if (mode === TabsEnum['密码登录']) {
            const { phone, password } = values;
            handlePasswordLogin({ phone, password: encode('md5', password) });
          } else if (mode === TabsEnum['验证码登录']) {
            const { phone, code } = values;
            handleCodeLogin({ phone, code });
          }
        }}
        layout="vertical"
        formList={
          [
            {
              label: '手机号',
              name: 'phone',
              contentConfig: {
                renderType: 'input',
                placeholder: '请输入手机号',
              },
            },
            mode === TabsEnum['验证码登录']
              ? {
                  label: '验证码',
                  name: 'captcha',
                  contentConfig: {
                    renderType: 'input',
                    placeholder: '请输入验证码',
                    suffix: <Captcha ref={captchaRef} />,
                  },
                }
              : null,
            mode === TabsEnum['验证码登录']
              ? {
                  label: '短信验证码',
                  name: 'code',
                  contentConfig: {
                    renderType: 'input',
                    placeholder: '请输入短信验证码',
                    suffix: (
                      <VerificationCodeButton
                        request={getValidateCode}
                        disabled={
                          !phoneRegExp.test(phoneValue) || !captchaValue
                        }
                      />
                    ),
                  },
                }
              : {
                  label: '密码',
                  name: 'password',
                  contentConfig: {
                    renderType: 'password',
                    placeholder: '请输入密码',
                  },
                },
            mode === TabsEnum['密码登录']
              ? {
                  label: '',
                  style: {
                    marginTop: '-18px',
                  },
                  contentConfig: {
                    renderType: 'custom',
                    render: () => {
                      return (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Checkbox
                            checked={isRememberPassword}
                            onChange={() => {
                              setIsRememberPassword(!isRememberPassword);
                            }}
                          >
                            记住密码
                          </Checkbox>
                          <Typography.Link
                            onClick={() => {
                              history.push('/user/password');
                            }}
                          >
                            忘记密码?
                          </Typography.Link>
                        </div>
                      );
                    },
                  },
                }
              : null,
            {
              label: '',
              style: {
                marginTop: '40px',
              },
              contentConfig: {
                renderType: 'custom' as const,
                render: () => {
                  return (
                    <Button size="large" type="primary" htmlType="submit" block>
                      立即登录
                    </Button>
                  );
                },
              },
            },
          ].filter((item) => {
            return !!item;
          }) as FormItemList
        }
      />
      <div className={styles.footer}>
        <span className={styles.name}>扫码登录</span>
        <div style={{ gridRowEnd: 'span 2' }}>
          <QrCode
            onLogin={(data) => {
              const { phone } = data;
              handleLoginSuccess(phone, data);
            }}
          />
        </div>
        <p className={styles.desc}>
          打开微信扫一扫，扫码后在手机上点击“确认授权”即可
        </p>
      </div>
    </div>
  );
};

export default Login;
