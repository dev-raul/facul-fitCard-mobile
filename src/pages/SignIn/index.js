import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Logo,
  FormView,
  FormInput,
  Title,
  NavigateSignUpView,
  NavigateSignUpText,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ImgLogo from '~/assets/icon.png';
import Button from '~/components/Button';
export default function SignIn({route}) {
  const {provider} = route.params;
  const passwordRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  return (
    <Container>
      <Logo source={ImgLogo} />
      <FormView>
        {provider ? (
          <>
            <Title> Personal Treiner </Title>
            <FormInput
              placeholder="Digite seu username"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={username}
              onChangeText={setUsername}
            />
            <FormInput
              placeholder="Digite a sua senha"
              ref={passwordRef}
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="send"
              value={password}
              onChangeText={setPassword}
            />
            <Button
              color="#69F0AE"
              onPress={() => console.log(username, password)}>
              ENTRAR
            </Button>
            <NavigateSignUpView onPress={() => {}}>
              <Icon name="sign-in-alt" color="#FFF" size={20} />
              <NavigateSignUpText>Não tenho cadastro</NavigateSignUpText>
            </NavigateSignUpView>
          </>
        ) : (
          <>
            <Title> Aluno </Title>
            <FormInput
              placeholder="ID"
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="send"
              value={id}
              onChangeText={setId}
            />
            <Button color="#69F0AE" onPress={() => console.log(id)}>
              ENTRAR
            </Button>
          </>
        )}
      </FormView>
    </Container>
  );
}

SignIn.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      provider: PropTypes.bool.isRequired,
    }),
  }),
};
