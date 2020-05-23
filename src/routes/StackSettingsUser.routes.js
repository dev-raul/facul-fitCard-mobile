import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SettingsUser from '~/pages/SettingsUser';

const Stack = createStackNavigator();

const StackSetting = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: '#e02041',
      headerShown: true,
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#fff'},
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      options={{title: 'Configurações'}}
      name="SettingsUser"
      component={SettingsUser}
    />
  </Stack.Navigator>
);
export default StackSetting;
