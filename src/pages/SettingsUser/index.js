import React, {useEffect, useState, useRef} from 'react';
import {useAuth} from '~/context/auth';
import {ActivityIndicator, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  EditarButton,
  Name,
  Username,
  ExitView,
  ExitText,
  ModalTitle,
  ModalInput,
  ModalButtonInfo,
  ModalButtonInfoText,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import BaseModal from '~/components/Modal';
import Button from '~/components/Button';
import Error from '~/components/Error';

import api from '~/services/api';

export default function SettingsUser() {
  const {SignOut} = useAuth();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [oldPassword, setOldPassword] = useState(null);

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const oldPasswordRef = useRef();

  useEffect(() => {
    async function getUser() {
      try {
        const storageUser = await AsyncStorage.getItem('@FC_Auth:user');
        const response = JSON.parse(storageUser);
        setUser(response);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    getUser();
    return;
  }, []);

  const handleCancelModal = () => {
    setModalVisible(false);
  };
  const handleEditUser = async () => {
    let data = {};

    if (name) data = {name, ...data};
    if (password) data = {password, ...data};
    if (confirmPassword) data = {confirmPassword, ...data};
    if (oldPassword) data = {oldPassword, ...data};
    if (Object.entries(data).length === 0) {
      Alert.alert('', 'Preencha pelo menos um campo!');
    } else {
      try {
        const response = await api.put(`/user/${user.id}`, data);
        console.log(response);
        await AsyncStorage.setItem(
          '@FC_Auth:user',
          JSON.stringify({...user, ...data}),
        );
        setUser({...user, ...data});
        setName(null);
        setPassword(null);
        setConfirmPassword(null);
        setOldPassword(null);
        setModalVisible(false);
        Alert.alert('', 'Dados atualizado com sucesso');
      } catch (err) {
        setError(err.response.data?.error);
      }
    }
  };

  if (loading) {
    return (
      <Container>
        <ActivityIndicator testID="loading" size="small" color="#e02041" />
      </Container>
    );
  }

  return (
    <Container>
      <BaseModal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <ModalTitle>Informe os novos dados:</ModalTitle>
        <ModalInput
          placeholder="Seu novo nome"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={name || ''}
          onChangeText={setName}
        />
        <ModalInput
          ref={oldPasswordRef}
          placeholder="Sua antiga senha"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={oldPassword || ''}
          onChangeText={setOldPassword}
        />
        {!!oldPassword && (
          <>
            <ModalInput
              ref={passwordRef}
              placeholder="Sua nova senha"
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() =>
                !!password && confirmPasswordRef.current.focus()
              }
              value={password || ''}
              onChangeText={setPassword}
            />
            <ModalInput
              ref={confirmPasswordRef}
              secureTextEntry
              placeholder="Confirmar senha"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="send"
              onSubmitEditing={handleEditUser}
              value={confirmPassword || ''}
              onChangeText={setConfirmPassword}
              wfweff
            />
          </>
        )}
        {error && <Error error={error} />}

        <Button opacity={true} color="#69F0AE" onPress={handleEditUser}>
          CONFIRMAR
        </Button>
        <ModalButtonInfo onPress={handleCancelModal}>
          <ModalButtonInfoText>Cancelar</ModalButtonInfoText>
        </ModalButtonInfo>
      </BaseModal>

      <EditarButton
        color="rgba(255, 145, 0, 0.8)"
        onPress={() => setModalVisible(true)}>
        Editar
      </EditarButton>
      <Icon name="user-circle" size={100} color="#000" />
      <Name> {user.name} </Name>
      <Username> {user.username} </Username>

      <ExitView onPress={() => SignOut()}>
        <ExitText>Sair</ExitText>
        <Icon name="sign-out-alt" size={30} color="#e02041" />
      </ExitView>
    </Container>
  );
}
