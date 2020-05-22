import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ButtonSignOut from '~/components/ButtonSignOut';

import Training from '~/pages/Training';
import ViewTraining from '~/pages/ViewTraining';
import EditItem from '~/pages/EditItem';

const Stack = createStackNavigator();

const StackTraining = () => (
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
    <Stack.Screen
      options={{title: 'Modelos de Ficha'}}
      name="Training"
      component={Training}
    />
    <Stack.Screen
      options={{title: 'Exercícios'}}
      name="ViewTraining"
      component={ViewTraining}
    />
    <Stack.Screen
      options={{title: 'Editar Exercício'}}
      name="EditItem"
      component={EditItem}
    />
  </Stack.Navigator>
);
export default StackTraining;
