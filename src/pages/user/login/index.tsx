import { history } from '@umijs/max';
import { Fragment, useState } from 'react';

import CompanyPage from './Company';
import LoginPage from './Login';
import PasswordPage from './Password';

import type { OrganizationType } from './interfaces';

enum PageModeEnum {
  Login, // 登录
  Company, // 选择公司
  First, // 首次登录
}

const Page = () => {
  // 当前显示的页面
  const [mode, setMode] = useState<PageModeEnum>(PageModeEnum.Login);
  // 手机号
  const [phone, setPhone] = useState<string>();
  // 组织列表
  const [orgList, setOrgList] = useState<OrganizationType[]>([]);

  // 登录成功回调
  const handleLogin = (p: string, org: OrganizationType[]) => {
    setPhone(p);
    setOrgList(org);
  };

  // 首次登录成功回调
  const handleLoginFirst = (isFirst: boolean) => {
    if (isFirst) {
      setMode(PageModeEnum.First);
      return;
    }
    handleSelectCompany();
  };

  // 选择公司
  const handleSelectCompany = () => {
    // 如果该账号在多组织下
    if (orgList.length > 1) {
      setMode(PageModeEnum.Company);
    } else {
      // 如果账号只有一个组织，直接进入后台
      history.push('/');
    }
  };

  return (
    <Fragment>
      {mode === PageModeEnum.Login && (
        <LoginPage onLogin={handleLogin} onLoginFirst={handleLoginFirst} />
      )}
      {mode === PageModeEnum.Company && (
        <CompanyPage phone={phone} data={orgList} />
      )}
      {mode === PageModeEnum.First && (
        <PasswordPage onSuccess={handleSelectCompany} phone={phone as string} />
      )}
    </Fragment>
  );
};

export default Page;
