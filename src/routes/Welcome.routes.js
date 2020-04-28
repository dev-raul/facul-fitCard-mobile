import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SwicthAuth from '~/pages/SwitchAuth';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Stack = createStackNavigator();

const Welcome = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#e02041'},
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      options={{headerShown: false}}
      name="SwitchAuth"
      component={SwicthAuth}
    />
    <Stack.Screen options={{title: 'Login'}} name="SignIn" component={SignIn} />
    <Stack.Screen
      options={{title: 'Cadastro'}}
      name="SignUp"
      component={SignUp}
    />
  </Stack.Navigator>
);
export default Welcome;
