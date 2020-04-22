import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SwicthAuth from '~/pages/SwitchAuth';
import SignIn from '~/pages/SignIn';

const Stack = createStackNavigator();

const Welcome = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerShown: false}}
      name="SwitchAuth"
      component={SwicthAuth}
    />
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);
export default Welcome;
