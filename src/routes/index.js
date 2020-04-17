import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import WelcomeRoute from './Welcome.routes';

const Stack = createStackNavigator();

const routes = ({loggedIn}) => (
  <NavigationContainer>
    {loggedIn ? (
      <Stack.Navigator>
        <Stack.Screen name="home" component={() => {}} />
      </Stack.Navigator>
    ) : (
      <WelcomeRoute />
    )}
  </NavigationContainer>
);

routes.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

routes.defaultProps = {
  loggedIn: false,
};

export default routes;
