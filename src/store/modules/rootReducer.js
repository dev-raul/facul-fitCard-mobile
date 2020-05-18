import {combineReducers} from 'redux';
import studant from './studant/reducer';
import studantTraining from './studantTraining/reducer';
import itemTraining from './itemsTraining/reducer';
import training from './training/reducer';

export default combineReducers({
  studant,
  studantTraining,
  itemTraining,
  training,
});
