import { Outlet } from '@umijs/max';

import type { FC, PropsWithChildren } from 'react';

const BlankLayout: FC<PropsWithChildren> = () => <Outlet />;

export default BlankLayout;
