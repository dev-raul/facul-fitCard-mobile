import {Alert} from 'react-native';
import {call, put, all, takeLatest} from 'redux-saga/effects';
import * as TrainingActions from './actions';
import Types from '../../Types';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';

function* loadTraining({payload}) {
  try {
    const storageUser = yield call(AsyncStorage.getItem, '@FC_Auth:user');
    const {id} = JSON.parse(storageUser);

    const response = yield call(
      api.get,
      `user/${id}/studant/${payload.studantId}/training`,
    );

    yield put(
      TrainingActions.loadStudantTrainingSuccess(response?.data?.trainings),
    );
  } catch (err) {
    yield put(TrainingActions.loadStudantTrainingFailure());
  }
}

function* deleteTraining({payload}) {
  console.log(payload.trainingId);
  try {
    const storageUser = yield call(AsyncStorage.getItem, '@FC_Auth:user');
    const {id} = JSON.parse(storageUser);
    const response = yield call(
      api.delete,
      `user/${id}/studant/${payload.studantId}/training/${payload.trainingId}`,
    );
    yield put(TrainingActions.deleteStudantTrainingSuccess(payload.trainingId));
  } catch (err) {
    yield put(TrainingActions.deleteStudantTrainingFailure());
    Alert.alert('Error:', 'Falha em delete o treino!');
  }
}
export default all([
  takeLatest(Types.load_studant_training_request, loadTraining),
  takeLatest(Types.delete_studant_training_request, deleteTraining),
]);
