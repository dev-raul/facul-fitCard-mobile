import {combineReducers} from 'redux';
import studant from './studant/reducer';
import training from './training/reducer';

export default combineReducers({studant, training});
