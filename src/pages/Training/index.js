import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

import {
  Container,
  ButtonNewTraining,
  ListEmptyText,
  ListEmptyView,
  Title,
} from './styles';
import {loadTrainingRequest} from '~/store/modules/training/actions';
import Icon from 'react-native-vector-icons';

import TrainingList from '~/components/TrainingList';
import ModalAddTraining from './ModalAddTraining';

export default function Training() {
  const dispatch = useDispatch();
  const {loading, data} = useSelector((state) => state.training);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(loadTrainingRequest());
  }, []);

  if ((loading === null || loading) && !modalVisible) {
    return (
      <Container>
        <ActivityIndicator size="small" color="#e02041" />
      </Container>
    );
  }
  return (
    <Container>
      <ModalAddTraining
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
      />
      <ButtonNewTraining onPress={() => setModalVisible(true)}>
        Adicionar Ficha
      </ButtonNewTraining>

      {data.length === 0 ? (
        <ListEmptyView>
          <Icon name="user-slash" color="#e02041" size={40} />
          <ListEmptyText>Você ainda não possui alunos!</ListEmptyText>
        </ListEmptyView>
      ) : (
        <>
          <Title>Seus modelos de fichas:</Title>
          <TrainingList trainings={data} navigationCard={true} />
        </>
      )}
    </Container>
  );
}
