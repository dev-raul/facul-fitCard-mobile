import React from 'react';
import {useAuth} from '~/context/auth';

import WelcomeRoute from './Welcome.routes';
import DashBoard from '~/pages/DashBoard';

import SplashScreen from '~/components/SplashScreen';

const routes = () => {
  const {loading, signed} = useAuth();
  if (loading) {
    return <SplashScreen />;
  }
  return signed ? <DashBoard /> : <WelcomeRoute />;
};
export default routes;
