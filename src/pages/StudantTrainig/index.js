import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Title, OpView, OpButton, InfoText} from './styles';
import TrainingList from '~/components/TrainingList';

import {deleteStudantRequest} from '~/store/modules/studant/actions';
import {loadStudantTrainingRequest} from '~/store/modules/studantTraining/actions';

const StudantTrainig = ({route, navigation}) => {
  const dispatch = useDispatch();
  const studants = useSelector((state) => state.studant.data);
  const {loading, data} = useSelector((state) => state.studantTraining);

  const {studantId} = route.params;
  const [studant, setStudant] = useState({});

  useEffect(() => {
    dispatch(loadStudantTrainingRequest(studantId));
  }, []);

  useEffect(() => {
    const find = studants.find((item) => item.id === studantId);
    if (find === undefined) {
      navigation.navigate('Home');
    } else {
      setStudant(find);
    }
  }, [studants]);

  const handleDeleteStudant = () => {
    dispatch(deleteStudantRequest(studantId));
  };

  if (loading === null || loading || !studant.name) {
    return (
      <Container>
        <ActivityIndicator size="small" color="#e02041" />
      </Container>
    );
  }

  return (
    <Container>
      <Title>{studant.name}</Title>
      <OpView>
        <OpButton
          color="rgba(255, 145, 0, 0.8)"
          onPress={() =>
            navigation.navigate('AddStudantTraining', {studantId})
          }>
          Adicionar Ficha
        </OpButton>
        <OpButton
          loading={studant.loading}
          color="rgba(213, 0, 0, 0.8)"
          onPress={handleDeleteStudant}>
          Deletar Aluno
        </OpButton>
      </OpView>

      <InfoText>Fichas aderidas:</InfoText>

      <TrainingList trainings={data} studantId={studant.id} />
    </Container>
  );
};

export default StudantTrainig;
