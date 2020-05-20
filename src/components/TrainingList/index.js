import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import {formatDate} from '~/libs/date';
import {
  Container,
  List,
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
  AddStudantTrainingButton,
  AddStudantTrainingText,
  ModalTitle,
  ModalButtonInfo,
  ModalButtonInfoText,
  ModalDate,
  ModalDateText,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import imgTraining from '~/assets/icon.png';

import {format} from 'date-fns';

import BaseModal from '~/components/Modal';
import Button from '~/components/Button';

import {addStudantTrainingRequest} from '~/store/modules/studantTraining/actions';
import {deleteTrainingRequest} from '~/store/modules/training/actions';

const TrainingList = ({
  trainings,
  studantId,
  addStudantTraining,
  navigationCard,
}) => {
  const naviagtion = useNavigation();
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.studantTraining);

  const [addTraining, setAddTraining] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [datePicketVisible, setDatePicketVisible] = useState(false);
  const [addSchedule, setAddSchedule] = useState();

  function hahdleDeleteTraining(trainingId) {
    dispatch(deleteTrainingRequest(trainingId));
  }

  function handleButtonAderir(addTraining) {
    setAddTraining(addTraining);
    setModalVisible(true);
  }

  const handleNavigation = (id, schedule) => {
    if (navigationCard) {
      naviagtion.navigate('ViewTraining', {
        trainingId: id,
        schedule,
        write: true,
      });
    } else {
      naviagtion.navigate('DashBoard', {
        screen: 'ViewTraining',
        params: {
          trainingId: id,
          schedule,
        },
      });
    }
  };
  const handleCancelModal = () => {
    setModalVisible(false);
  };

  const handleSubmitAddStudantTraining = () => {
    dispatch(
      addStudantTrainingRequest(
        studantId,
        addTraining,
        format(addSchedule, 'yyyy-MM-dd'),
      ),
    );
  };

  if (trainings.length === 0) {
    return (
      <TrainingEmptyView>
        <Icon name="file-alt" color="#e02041" size={40} />
        <TrainingEmptyText>
          Você não tem nenhum modelo de ficha!
        </TrainingEmptyText>
      </TrainingEmptyView>
    );
  }
  return (
    <>
      <List
        data={trainings}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        renderItem={({item}) => {
          const schedule = formatDate(item?.createdAt);
          return (
            <TrainingView>
              {addStudantTraining ? (
                <AddStudantTrainingButton
                  onPress={() => handleButtonAderir(item)}>
                  <AddStudantTrainingText>Aderir</AddStudantTrainingText>
                </AddStudantTrainingButton>
              ) : (
                <TrainingHeader>
                  <Data>{schedule} </Data>
                  <Trash onPress={() => hahdleDeleteTraining(item.id)}>
                    <Icon name="trash-alt" size={14} color="#e02041" />
                  </Trash>
                </TrainingHeader>
              )}

              <TrainingImg source={imgTraining} />
              <InfoView>
                <TrainingName> {item.name} </TrainingName>
              </InfoView>

              <MoreButton onPress={() => handleNavigation(item.id, schedule)}>
                <MoreButtonText>Visualizar</MoreButtonText>
              </MoreButton>
            </TrainingView>
          );
        }}
      />
      <BaseModal visible={modalVisible} onRequestClose={handleCancelModal}>
        <ModalTitle>Informe os dados necessários:</ModalTitle>
        <ModalDate onPress={() => setDatePicketVisible(true)}>
          <ModalDateText>
            {addSchedule
              ? format(addSchedule, 'dd/MM/yyyy')
              : 'Data de termino da ficha'}
          </ModalDateText>
        </ModalDate>

        {datePicketVisible && (
          <DateTimePicker
            value={addSchedule || new Date()}
            mode="date"
            display="spinner"
            minimumDate={new Date()}
            formatDate="YYYY-MM-DD"
            onChange={(event, selectedDate) => {
              setDatePicketVisible(false);
              if (event.type === 'set') {
                setAddSchedule(selectedDate);
              }
            }}
          />
        )}

        <Button
          opacity={true}
          loading={loading}
          color="#69F0AE"
          onPress={handleSubmitAddStudantTraining}>
          Aderir
        </Button>
        <ModalButtonInfo onPress={handleCancelModal}>
          <ModalButtonInfoText>Cancelar</ModalButtonInfoText>
        </ModalButtonInfo>
      </BaseModal>
    </>
  );
};

TrainingList.defaultProps = {
  trainings: [],
  addStudantTraining: false,
  navigationCard: false,
};

TrainingList.propTypes = {
  trainings: PropTypes.array.isRequired,
  studantId: PropTypes.number,
  navigationCard: PropTypes.bool,
  addStudantTraining: PropTypes.bool,
};

export default TrainingList;
