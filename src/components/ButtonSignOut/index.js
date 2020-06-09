import React from 'react';

import {Container} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {useAuth} from '~/context/auth';

export default function ButtonSignOut() {
  const {SignOut} = useAuth();
  return (
    <Container testID="sign-out" onPress={SignOut}>
      <Icon name="power-off" size={20} color="#e02041" />
    </Container>
  );
}
