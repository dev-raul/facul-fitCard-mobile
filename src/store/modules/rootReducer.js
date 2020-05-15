import {combineReducers} from 'redux';
import studant from './studant/reducer';
import studantTraining from './studantTraining/reducer';
import itemTraining from './itemsTraining/reducer';

export default combineReducers({studant, studantTraining, itemTraining});
