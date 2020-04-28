import React from 'react';
import {useAuth} from '~/context/auth';

import WelcomeRoute from './Auth.routes';
import DashBoardRoute from './DashBoard.routes';
import SplashScreen from '~/components/SplashScreen';

const routes = () => {
  const {loading, signed} = useAuth();
  if (loading) {
    return <SplashScreen />;
  }
  return signed ? <DashBoardRoute /> : <WelcomeRoute />;
};
export default routes;
