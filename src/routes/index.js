import React from 'react';
import {useAuth} from '~/context/auth';
import SplashScreen from '~/components/SplashScreen';

import WelcomeRoute from './Auth.routes';
import DashBoardRoute from './DashBoard.routes';
import StackStudantRead from './StackStudantRead.routes';

const routes = () => {
  const {loading, signed, user} = useAuth();
  if (loading) {
    return <SplashScreen />;
  }
  if (signed) {
    return user.provider ? <DashBoardRoute /> : <StackStudantRead />;
  } else {
    return <WelcomeRoute />;
  }
};
export default routes;
