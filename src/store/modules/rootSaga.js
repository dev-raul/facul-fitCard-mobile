import {all} from 'redux-saga/effects';

import studant from './studant/sagas';
import training from './training/sagas';
import itemTraining from './itemsTraining/sagas';
export default function* rootSage() {
  return yield all([studant, training, itemTraining]);
}
