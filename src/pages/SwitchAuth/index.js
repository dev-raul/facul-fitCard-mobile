import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import {
  Container,
  Logo,
  SwitchView,
  WellcomeText,
  WelcomeDescriptionText,
  ButtonView,
  ButtonText,
} from './styles';

import ImgLogo from '~/assets/icon.png';

export default function SwitchAuth() {
  const navigation = useNavigation();
  return (
    <Container>
      <Logo source={ImgLogo} />
      <SwitchView>
        <WellcomeText>Seja Bem-vindo!</WellcomeText>

        <WelcomeDescriptionText>
          Escolha o seu tipo de usuário:
        </WelcomeDescriptionText>
        <ButtonView
          testID="personal"
          onPress={() => navigation.navigate('SignIn', {provider: true})}>
          <Icon name="user-cog" size={60} color="#e02041" />
          <View>
            <ButtonText>Personal</ButtonText>
          </View>
        </ButtonView>
        <ButtonView
          onPress={() => navigation.navigate('SignIn', {provider: false})}>
          <Icon name="running" size={60} color="#e02041" />
          <View>
            <ButtonText>Aluno</ButtonText>
          </View>
        </ButtonView>
      </SwitchView>
    </Container>
  );
}
