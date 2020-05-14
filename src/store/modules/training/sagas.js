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

    yield put(TrainingActions.loadTrainingSuccess(response?.data?.trainings));
  } catch (err) {
    yield put(TrainingActions.loadTrainingFailure());
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
    yield put(TrainingActions.deleteTrainingSuccess(payload.trainingId));
  } catch (err) {
    yield put(TrainingActions.deleteTrainingFailure());
    Alert.alert('Error:', 'Falha em delete o treino!');
  }
}
export default all([
  takeLatest(Types.load_training_request, loadTraining),
  takeLatest(Types.delete_training_request, deleteTraining),
]);
