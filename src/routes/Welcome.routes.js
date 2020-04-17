import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SwicthAuth from '~/pages/SwitchAuth';

const Stack = createStackNavigator();

const Welcome = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="SwitchAuth" component={SwicthAuth} />
  </Stack.Navigator>
);
export default Welcome;
