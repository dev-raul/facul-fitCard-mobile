import {Alert} from 'react-native';
import {call, put, all, takeLatest} from 'redux-saga/effects';
import * as ItemTrainingActions from './actions';
import Types from '../../Types';
import api from '~/services/api';

function* loadItemsTraining({payload}) {
  try {
    const response = yield call(
      api.get,
      `/training/${payload.trainingId}/item`,
    );
    const data = response?.data || [];
    yield put(ItemTrainingActions.loadItemTrainingSuccess(data));
  } catch (err) {
    yield put(ItemTrainingActions.loadItemTrainingFailure());
  }
}

export default all([
  takeLatest(Types.load_item_training_request, loadItemsTraining),
]);
