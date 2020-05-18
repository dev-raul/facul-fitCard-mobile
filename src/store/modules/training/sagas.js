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

export default all([takeLatest(Types.load_training_request, loadTraining)]);
