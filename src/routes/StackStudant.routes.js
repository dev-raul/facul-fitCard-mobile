import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ButtonSignOut from '~/components/ButtonSignOut';

import DashBoard from '~/pages/DashBoard';

const Stack = createStackNavigator();

const Studant = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: '#e02041',
      headerShown: true,
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#fff'},
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => <ButtonSignOut />,
    }}>
    <Stack.Screen options={{title: 'Home'}} name="Home" component={DashBoard} />
  </Stack.Navigator>
);
export default Studant;
