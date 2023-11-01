import { useModel } from '@umijs/max';
import { useMemo } from 'react';

const useAccess = () => {
  const { access } = useModel('user');

  const accessKeys = useMemo(() => {
    return access?.map((item) => item.key);
  }, [access]);

  const hasAccess = (key: string) => {
    return accessKeys.includes(key);
  };

  return {
    access,
    hasAccess,
  };
};
export default useAccess;
