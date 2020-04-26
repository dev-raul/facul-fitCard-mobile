/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {AuthProvider} from '~/context/auth';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes loggedIn={false} />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
