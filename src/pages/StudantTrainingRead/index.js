import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {Container, Title, InfoText} from './styles';

import TrainingList from '~/components/StudantTrainingList';

import {loadStudantTrainingRequest} from '~/store/modules/studantTraining/actions';

const StudantTrainingRead = () => {
  const dispatch = useDispatch();
  const {loading, data} = useSelector((state) => state.studantTraining);

  const [studant, setStudant] = useState({});

  useEffect(() => {
    async function getStudant() {
      const storageUser = await AsyncStorage.getItem('@FC_Auth:user');
      const response = JSON.parse(storageUser);

      setStudant(response);
    }
    getStudant();
  }, []);

  useEffect(() => {
    if (Object.entries(studant).length > 0) {
      dispatch(loadStudantTrainingRequest(studant.id));
    }
  }, [studant]);

  if (loading === null || loading || Object.entries(studant).length === 0) {
    return (
      <Container>
        <ActivityIndicator size="small" color="#e02041" />
      </Container>
    );
  }

  return (
    <Container>
      <Title>{studant.name}</Title>

      <InfoText>Fichas aderidas:</InfoText>

      <TrainingList read={true} trainings={data} studantId={studant.id} />
    </Container>
  );
};

export default StudantTrainingRead;
