import React, {useRef, useState} from 'react';
import {
  Container,
  Logo,
  FormView,
  FormInput,
  Title,
  SubTitle,
  NavigateSignInView,
  NavigateSignInText,
  ErrorView,
  ErrorText,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalDescription,
  FooterView,
  ButtonInfo,
  ButtonInfoText,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ImgLogo from '~/assets/icon.png';
import Button from '~/components/Button';
import Modal from '~/components/Modal';

import api from '~/services/api';

export default function SignIn({navigation}) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  async function handleSingUp() {
    setLoading(true);
    try {
      await api.post('/user', {name, username, password});
      setLoading(false);
      setModalVisible(true);
      setName('');
      setUsername('');
      setPassword('');
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }

  return (
    <Container>
      <Logo source={ImgLogo} />

      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <ModalTitle>Usuário criado com sucesso!</ModalTitle>
        <ModalDescription>Deseja voltar para a tela de Login?</ModalDescription>
        <FooterView>
          <ButtonInfo onPress={() => setModalVisible(false)}>
            <ButtonInfoText color="#e02041">Cancelar</ButtonInfoText>
          </ButtonInfo>
          <ButtonInfo
            onPress={() => navigation.navigate('SignIn', {provider: true})}>
            <ButtonInfoText color="#00E676">Confirmar</ButtonInfoText>
          </ButtonInfo>
        </FooterView>
      </Modal>

      <FormView>
        <Title>
          Seja um personal mais prático quando for criar fichas e mude a sua
          rotina.
        </Title>
        <SubTitle>Informe os seus dados:</SubTitle>
        {error && (
          <ErrorView>
            <Icon name="info" size={12} color="#B00020" />
            <ErrorText>Verifique os seus dados! :(</ErrorText>
          </ErrorView>
        )}
        <FormInput
          placeholder="Digite seu nome"
          autoCorrect={false}
          autoCapitalize="words"
          returnKeyType="next"
          onSubmitEditing={() => usernameRef.current.focus()}
          value={name}
          onChangeText={setName}
        />
        <FormInput
          placeholder="Digite seu username"
          ref={usernameRef}
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
          onSubmitEditing={handleSingUp}
          value={password}
          onChangeText={setPassword}
        />

        <Button loading={loading} color="#69F0AE" onPress={handleSingUp}>
          CADASTRAR
        </Button>

        <NavigateSignInView
          onPress={() => navigation.navigate('SignIn', {provider: true})}>
          <Icon name="arrow-left" color="#FFF" size={20} />
          <NavigateSignInText>Já tenho cadastro</NavigateSignInText>
        </NavigateSignInView>
      </FormView>
    </Container>
  );
}
