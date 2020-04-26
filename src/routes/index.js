import React from 'react';
import {useAuth} from '~/context/auth';

import WelcomeRoute from './Welcome.routes';
import DashBoard from '~/pages/DashBoard';

const routes = () => {
  const {loading, signed} = useAuth();
  return signed ? <DashBoard /> : <WelcomeRoute />;
};
export default routes;
