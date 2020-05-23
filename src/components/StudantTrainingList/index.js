import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {formatDate} from '~/libs/date';
import PropTypes from 'prop-types';
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

import {deleteStudantTrainingRequest} from '~/store/modules/studantTraining/actions';

const TrainingList = ({trainings, studantId}, read) => {
  const naviagtion = useNavigation();
  const dispatch = useDispatch();

  function hahdleDeleteTraining(trainingId) {
    dispatch(deleteStudantTrainingRequest(studantId, trainingId));
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
      renderItem={({item}) => {
        const schedule = formatDate(item?.StudantTraining?.schedule);
        return (
          <TrainingView>
            <TrainingHeader>
              {read ? (
                <Data style={{width: '100%'}}>{schedule} </Data>
              ) : (
                <>
                  <Data>{schedule} </Data>
                  <Trash onPress={() => hahdleDeleteTraining(item.id)}>
                    <Icon name="trash-alt" size={14} color="#e02041" />
                  </Trash>
                </>
              )}
            </TrainingHeader>
            <TrainingImg source={imgTraining} />
            <InfoView>
              <TrainingName> {item.name} </TrainingName>
              <MoreButton
                onPress={() =>
                  naviagtion.navigate('ViewTraining', {
                    trainingId: item.id,
                    schedule,
                  })
                }>
                <MoreButtonText>Visualizar</MoreButtonText>
              </MoreButton>
            </InfoView>
          </TrainingView>
        );
      }}
    />
  );
};

TrainingList.defaultProps = {
  trainings: [],
  read: false,
};

TrainingList.propTypes = {
  trainings: PropTypes.array.isRequired,
  studantId: PropTypes.number.isRequired,
  read: PropTypes.bool,
};

export default TrainingList;
