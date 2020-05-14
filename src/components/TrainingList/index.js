import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {format, parseISO} from 'date-fns';
import {
  Container,
  TrainingView,
  TrainingHeader,
  Data,
  Trash,
  TrainingImg,
  InfoView,
  TrainingName,
  MoreButton,
  MoreButtonText,
  TrainingEmptyView,
  TrainingEmptyText,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import imgTraining from '~/assets/icon.png';

import {deleteTrainingRequest} from '~/store/modules/training/actions';

const TrainingList = ({trainings, studantId}) => {
  const naviagtion = useNavigation();
  const dispatch = useDispatch();

  function hahdleDeleteTraining(trainingId) {
    dispatch(deleteTrainingRequest(studantId, trainingId));
  }

  function formatDate(date) {
    const dateIso = parseISO(date);
    return format(dateIso, 'dd/MM/yyyy');
  }

  if (trainings.length === 0) {
    return (
      <TrainingEmptyView>
        <Icon name="file-alt" color="#e02041" size={40} />
        <TrainingEmptyText>
          Esse aluno ainda não possui treinos!
        </TrainingEmptyText>
      </TrainingEmptyView>
    );
  }
  return (
    <Container
      data={trainings}
      keyExtractor={(item) => String(item.id)}
      numColumns={2}
      renderItem={({item}) => (
        <TrainingView>
          <TrainingHeader>
            <Data>{formatDate(item?.StudantTraining?.schedule)} </Data>
            <Trash onPress={() => hahdleDeleteTraining(item.id)}>
              <Icon name="trash-alt" size={14} color="#e02041" />
            </Trash>
          </TrainingHeader>
          <TrainingImg source={imgTraining} />
          <InfoView>
            <TrainingName> {item.name} </TrainingName>
            <MoreButton
              onPress={() =>
                naviagtion.navigate('ViewTraining', {trainingId: item.id})
              }>
              <MoreButtonText>Visualizar</MoreButtonText>
            </MoreButton>
          </InfoView>
        </TrainingView>
      )}
    />
  );
};

TrainingList.defaultProps = {
  trainings: [],
};

TrainingList.propTypes = {
  trainings: PropTypes.array.isRequired,
  studantId: PropTypes.number.isRequired,
};

export default TrainingList;
