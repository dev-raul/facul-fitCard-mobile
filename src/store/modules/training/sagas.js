import {Alert} from 'react-native';
import {call, put, all, takeLatest} from 'redux-saga/effects';
import * as TrainingActions from './actions';
import Types from '../../Types';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';

function* loadTraining() {
  try {
    const storageUser = yield call(AsyncStorage.getItem, '@FC_Auth:user');
    const {id} = JSON.parse(storageUser);

    const response = yield call(api.get, `user/${id}/training`);

    yield put(TrainingActions.loadTrainingSuccess(response?.data));
  } catch (err) {
    yield put(TrainingActions.loadTrainingFailure());
  }
}

function* addTraining({payload}) {
  try {
    const storageUser = yield call(AsyncStorage.getItem, '@FC_Auth:user');
    const {id} = JSON.parse(storageUser);

    const response = yield call(api.post, `user/${id}/training`, payload.data);

    yield put(TrainingActions.addTrainingSuccess(response.data));
    Alert.alert('Ficha criado!', 'É preciso criar os exercícios da ficha');
  } catch (err) {
    yield put(TrainingActions.addTrainingFailure());
    Alert.alert('Error: ', 'Falha ao criar uma ficha!');
  }
}
function* deleteTraining({payload}) {
  try {
    const storageUser = yield call(AsyncStorage.getItem, '@FC_Auth:user');
    const {id} = JSON.parse(storageUser);

    const response = yield call(
      api.delete,
      `user/${id}/training/${payload.trainingId}`,
    );

    yield put(TrainingActions.deleteTrainingSuccess(payload.trainingId));
  } catch (err) {
    yield put(TrainingActions.deleteTrainingFailure());
    Alert.alert('Error: ', 'Falha em deletar uma ficha!');
  }
}

export default all([
  takeLatest(Types.load_training_request, loadTraining),
  takeLatest(Types.add_training_request, addTraining),
  takeLatest(Types.delete_training_request, deleteTraining),
]);
