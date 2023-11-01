import { UserAvatar } from '@pangu/materials';
import { useModel } from '@umijs/max';

import { logout } from '@/utils';

import './index.less';

const User = () => {
  const { info } = useModel('user');

  const items = [{ key: 'logout', label: '退出登录' }];

  return (
    <UserAvatar
      className="m-user"
      name={info?.name}
      menuProps={{
        items,
        onClick: ({ key }) => {
          if (key === 'logout') {
            logout();
          }
        },
      }}
    />
  );
};

export default User;
