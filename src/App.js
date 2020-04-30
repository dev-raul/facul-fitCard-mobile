/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import './configs/reactotron';
import Routes from './routes';
import {AuthProvider} from '~/context/auth';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor="#e02041" barStyle="light-content" />
          <Routes loggedIn={false} />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
