import {combineReducers} from 'redux';
import studant from './studant/reducer';
import training from './training/reducer';
import itemTraining from './itemsTraining/reducer';

export default combineReducers({studant, training, itemTraining});
