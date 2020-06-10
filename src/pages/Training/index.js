import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

import {Container, ButtonNewTraining, Title} from './styles';
import {loadTrainingRequest} from '~/store/modules/training/actions';

import TrainingList from '~/components/TrainingList';
import ModalAddTraining from './ModalAddTraining';
import EmptyList from '~/components/EmptyList';

export default function Training() {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  const {loading, data} = useSelector((state) => state.training);

  useEffect(() => {
    dispatch(loadTrainingRequest());
  }, []);

  if (isLoad) {
    if (loading) {
      setIsLoad(false);
    }
    return (
      <Container>
        <ActivityIndicator testID="loading" size="small" color="#e02041" />
      </Container>
    );
  } else if (!loading || modalVisible) {
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
          <EmptyList icon="user-slash">
            Você ainda não possui modelos de fichas!
          </EmptyList>
        ) : (
          <>
            <Title>Seus modelos de fichas:</Title>
            <TrainingList trainings={data} navigationCard={true} />
          </>
        )}
      </Container>
    );
  } else {
    return (
      <Container>
        <ActivityIndicator testID="loading" size="small" color="#e02041" />
      </Container>
    );
  }
}
