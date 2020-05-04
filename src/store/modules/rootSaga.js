import {all} from 'redux-saga/effects';

import studant from './studant/sagas';

export default function* rootSage() {
  return yield all([studant]);
}
