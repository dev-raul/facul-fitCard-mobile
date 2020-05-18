import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

import {Container, Info, Title} from './styles';

import TrainingList from '~/components/TrainingList';
import {loadTrainingRequest} from '~/store/modules/training/actions';

const AddStudantTraining = ({route}) => {
  const {studantId, studantName} = route.params;
  const dispatch = useDispatch();
  const {loading, data} = useSelector((state) => state.training);

  useEffect(() => {
    dispatch(loadTrainingRequest());
  }, []);

  if (loading === null || loading) {
    return (
      <Container>
        <ActivityIndicator size="small" color="#e02041" />
      </Container>
    );
  }

  return (
    <Container>
      <Info>Aluno: {studantName}</Info>
      <Title>Todos os modelos de ficha:</Title>
      <TrainingList
        trainings={data.trainings}
        studantId={studantId}
        addStudantTraining={true}
      />
    </Container>
  );
};

export default AddStudantTraining;
