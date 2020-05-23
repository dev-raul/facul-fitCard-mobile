import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ButtonSignOut from '~/components/ButtonSignOut';

import StudantTrainingRead from '~/pages/StudantTrainingRead';
import ViewTraining from '~/pages/ViewTraining';

const Stack = createStackNavigator();

const StackStudantRead = () => (
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
      options={{title: 'Aluno'}}
      name="StudantTraining"
      component={StudantTrainingRead}
    />
    <Stack.Screen
      options={{title: 'Ficha'}}
      name="ViewTraining"
      component={ViewTraining}
    />
  </Stack.Navigator>
);
export default StackStudantRead;
