import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container} from './styles';

export default function SplashScreen() {
  return (
    <Container>
      <ActivityIndicator size="large" color="#FFf" />
    </Container>
  );
}
