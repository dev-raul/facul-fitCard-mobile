import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useAuth} from '~/context/auth';
import {
  Container,
  Logo,
  FormView,
  FormInput,
  Title,
  NavigateSignUpView,
  NavigateSignUpText,
  ErrorView,
  ErrorText,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ImgLogo from '~/assets/icon.png';
import Button from '~/components/Button';

export default function SignIn({route}) {
  const {SignIn} = useAuth();
  const {provider} = route.params;

  const passwordRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSingIn() {
    setLoading(true);
    try {
      const data = provider ? {username, password} : {id_hash: id};
      await SignIn(data, provider);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <Container>
      <Logo source={ImgLogo} />
      <FormView>
        <Title> {provider ? 'Personal Treiner' : 'Aluno'} </Title>
        {error && (
          <ErrorView>
            <Icon name="info" size={12} color="#B00020" />
            <ErrorText>Verifique as suas credenciais! :(</ErrorText>
          </ErrorView>
        )}
        {provider ? (
          <>
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
          </>
        ) : (
          <>
            <FormInput
              placeholder="ID"
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="send"
              value={id}
              onChangeText={setId}
            />
          </>
        )}
        <Button loading={loading} color="#69F0AE" onPress={handleSingIn}>
          ENTRAR
        </Button>
        {provider && (
          <NavigateSignUpView onPress={() => {}}>
            <Icon name="sign-in-alt" color="#FFF" size={20} />
            <NavigateSignUpText>Não tenho cadastro</NavigateSignUpText>
          </NavigateSignUpView>
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
