import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ButtonSignOut from '~/components/ButtonSignOut';

import DashBoard from '~/pages/DashBoard';
import StudantTrainig from '~/pages/StudantTrainig';
import ViewTraining from '~/pages/ViewTraining';
import AddStudantTraining from '~/pages/AddStudantTraining';

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
    <Stack.Screen
      options={{title: 'Aluno'}}
      name="StudantTraining"
      component={StudantTrainig}
    />
    <Stack.Screen
      options={{title: 'Ficha'}}
      name="ViewTraining"
      component={ViewTraining}
    />
    <Stack.Screen
      options={{title: 'Aderir Ficha'}}
      name="AddStudantTraining"
      component={AddStudantTraining}
    />
  </Stack.Navigator>
);
export default Studant;
