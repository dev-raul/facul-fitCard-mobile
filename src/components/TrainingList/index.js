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
import EmptyList from '~/components/EmptyList';

import {addStudantTrainingRequest} from '~/store/modules/studantTraining/actions';
import {deleteTrainingRequest} from '~/store/modules/training/actions';

const TrainingList = ({
  trainings,
  studantId,
  addStudantTraining,
  navigationCard,
}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.studantTraining);

  const [addTraining, setAddTraining] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [datePicketVisible, setDatePicketVisible] = useState(false);
  const [addSchedule, setAddSchedule] = useState(new Date());

  const hahdleDeleteTraining = (trainingId) => {
    dispatch(deleteTrainingRequest(trainingId));
  };

  const handleButtonAderir = (addTraining) => {
    setAddTraining(addTraining);
    setModalVisible(true);
  };

  const handleNavigation = (id, schedule) => {
    if (navigationCard) {
      navigate('ViewTraining', {
        trainingId: id,
        schedule,
        write: true,
      });
    } else {
      navigate('DashBoard', {
        screen: 'ViewTraining',
        params: {
          trainingId: id,
          schedule,
        },
      });
    }
  };
  const handleCancelModal = () => {
    setAddSchedule(null);
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
      <EmptyList icon="file-alt">
        Você não tem nenhum modelo de ficha!
      </EmptyList>
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
                  testID="button-aderir"
                  onPress={() => handleButtonAderir(item)}>
                  <AddStudantTrainingText>Aderir</AddStudantTrainingText>
                </AddStudantTrainingButton>
              ) : (
                <TrainingHeader>
                  <Data>{schedule} </Data>
                  <Trash
                    testID="delete-training"
                    onPress={() => hahdleDeleteTraining(item.id)}>
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
      <BaseModal
        testID="modal"
        visible={modalVisible}
        onRequestClose={handleCancelModal}>
        <ModalTitle>Informe os dados necessários:</ModalTitle>
        <ModalDate
          testID="button-date-picker"
          onPress={() => setDatePicketVisible(true)}>
          <ModalDateText>
            {addSchedule
              ? format(addSchedule, 'dd/MM/yyyy')
              : 'Data de termino da ficha'}
          </ModalDateText>
        </ModalDate>

        {datePicketVisible && (
          <DateTimePicker
            testID="date-picker"
            value={addSchedule}
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
          Confirmar
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
