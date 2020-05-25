import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

import {Container, Info, Title} from './styles';

import TrainingList from '~/components/TrainingList';
import {loadTrainingRequest} from '~/store/modules/training/actions';

const AddStudantTraining = ({route}) => {
  const {studantId, studantName} = route.params;
  const dispatch = useDispatch();
  const {loading, data} = useSelector((state) => state.training);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    dispatch(loadTrainingRequest());
  }, []);

  if (isLoad) {
    if (loading) {
      setIsLoad(false);
    }
    return (
      <Container>
        <ActivityIndicator size="small" color="#e02041" />
      </Container>
    );
  } else if (!loading) {
    return (
      <Container>
        <Info>Aluno: {studantName}</Info>
        <Title>Todos os modelos de ficha:</Title>
        <TrainingList
          trainings={data}
          studantId={studantId}
          addStudantTraining={true}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        <ActivityIndicator size="small" color="#e02041" />
      </Container>
    );
  }
};
AddStudantTraining.propTypes = {
  route: PropTypes.shape({
    studantId: PropTypes.number.isRequired,
    studantName: PropTypes.string.isRequired,
  }),
};
export default AddStudantTraining;
