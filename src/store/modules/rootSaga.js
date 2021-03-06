import {all} from 'redux-saga/effects';

import studant from './studant/sagas';
import studantTraining from './studantTraining/sagas';
import itemTraining from './itemsTraining/sagas';
import training from './training/sagas';

export default function* rootSage() {
  return yield all([studant, studantTraining, itemTraining, training]);
}
