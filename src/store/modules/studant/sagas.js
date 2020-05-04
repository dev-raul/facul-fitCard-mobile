import {call, put, all, takeLatest} from 'redux-saga/effects';
import * as StudantActions from './actions';
import Types from '../../Types';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';

function* loadStudant() {
  try {
    const storageUser = yield call(AsyncStorage.getItem, '@FC_Auth:user');
    const {id} = JSON.parse(storageUser);
    const response = yield call(api.get, `user/${id}/studant`);
    yield put(StudantActions.loadStudantSuccess(response.data));
  } catch (err) {
    yield put(StudantActions.loadStudantFailure());
  }
}
function* addStudant({payload}) {
  try {
    const storageUser = yield call(AsyncStorage.getItem, '@FC_Auth:user');
    const {id} = JSON.parse(storageUser);
    const response = yield call(api.post, `user/${id}/studant`, payload.data);
    yield put(StudantActions.addStudantSuccess(response.data));
  } catch (err) {
    yield put(StudantActions.addStudantFailure());
  }
}
export default all([
  takeLatest(Types.load_studant_request, loadStudant),
  takeLatest(Types.add_studant_request, addStudant),
]);
