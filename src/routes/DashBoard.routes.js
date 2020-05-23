import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import StackStudant from './StackStudant.routes';
import StackTraining from './StackTraining.routes';
import StackSetting from './StackSettingsUser.routes';

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
        if (route.name === 'SettingsUser') {
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
    <Tab.Screen name="Training" component={StackTraining} />
    <Tab.Screen name="SettingsUser" component={StackSetting} />
  </Tab.Navigator>
);

export default DashBoardRoute;
