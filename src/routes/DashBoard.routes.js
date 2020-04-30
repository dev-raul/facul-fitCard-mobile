import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import StackStudant from './StackStudant.routes';
import Training from '~/pages/Training';
import Settings from '~/pages/Settings';

const Tab = createBottomTabNavigator();

const DashBoardRoute = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        let iconName;
        if (route.name === 'DashBoard') {
          iconName = 'user-friends';
        }
        if (route.name === 'Training') {
          iconName = 'file-alt';
        }
        if (route.name === 'Settings') {
          iconName = 'user-cog';
        }

        return <Icon name={iconName} size={24} color={color} />;
      },
    })}
    tabBarOptions={{
      showIcon: true,
      showLabel: false,
      activeTintColor: '#e02041',
      inactiveTintColor: 'rgba(0,0,0, 0.3)',
      style: {
        backgroundColor: '#FFF',
      },
    }}>
    <Tab.Screen name="DashBoard" component={StackStudant} />
    <Tab.Screen name="Training" component={Training} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export default DashBoardRoute;
