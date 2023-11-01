import { useRequest } from '@umijs/max';

import { getBasicInfoAccount, getBasicMenuAccount } from '@/api';
import { BaseResponse } from '@/interfaces/base';

import type {
  GetBasicInfoAccountResponse,
  GetBasicMenuAccountResponse,
} from '@/api';

export type UserInfo = GetBasicInfoAccountResponse;
export type AccessItem = GetBasicMenuAccountResponse[0];

export default function useUserModel() {
  // 用户信息
  const { data: info, run: fetchUserInfo } = useRequest<BaseResponse<UserInfo>>(
    getBasicInfoAccount,
    { manual: true },
  );

  // 用户权限
  const { data: access = [], run: fetchUserAccess } = useRequest<
    BaseResponse<AccessItem[]>
  >(getBasicMenuAccount, { manual: true });

  return {
    info,
    fetchUserInfo,
    access,
    fetchUserAccess,
  };
}
