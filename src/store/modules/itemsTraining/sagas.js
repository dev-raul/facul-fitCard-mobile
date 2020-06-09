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

function* addItemsTraining({payload}) {
  try {
    const response = yield call(
      api.post,
      `/training/${payload.trainingId}/item`,
      payload.data,
    );
    yield put(ItemTrainingActions.addItemTrainingSuccess(response?.data));
    Alert.alert('Sucesso em criar um item da ficha!');
  } catch (err) {
    yield put(
      ItemTrainingActions.addItemTrainingFailure(err.response.data?.error),
    );
  }
}

function* deleteItemsTraining({payload}) {
  try {
    yield call(
      api.delete,
      `/training/${payload.trainingId}/item/${payload.itemId}`,
    );
    yield put(ItemTrainingActions.deleteItemTrainingSuccess(payload.itemId));
    Alert.alert('Sucesso em deletar o item da ficha!');
  } catch (err) {
    Alert.alert('Error:', 'Falha em deletar item da ficha!');
    yield put(ItemTrainingActions.deleteItemTrainingFailure());
  }
}

function* updateItemsTraining({payload}) {
  try {
    yield call(
      api.put,
      `/training/${payload.trainingId}/item/${payload.itemId}`,
      payload.data,
    );
    yield put(
      ItemTrainingActions.updateItemTrainingSuccess({
        id: payload.itemId,
        ...payload.data,
      }),
    );
    Alert.alert('Sucesso em atualizar um item da ficha!');
  } catch (err) {
    yield put(
      ItemTrainingActions.updateItemTrainingFailure(err.response.data?.error),
    );
  }
}

export default all([
  takeLatest(Types.load_item_training_request, loadItemsTraining),
  takeLatest(Types.add_item_training_request, addItemsTraining),
  takeLatest(Types.delete_item_training_request, deleteItemsTraining),
  takeLatest(Types.update_item_training_request, updateItemsTraining),
]);
