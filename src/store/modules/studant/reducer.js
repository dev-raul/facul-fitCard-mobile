import produce from 'immer';
import Types from '../../Types';
const initialState = {
  loading: null,
  error: false,
  data: [],
};

export default (state = initialState, {type, payload}) => {
  return produce(state, (draft) => {
    switch (type) {
      //load studant
      case Types.load_studant_request:
        draft.loading = true;
        break;
      case Types.load_studant_success:
        draft.loading = false;
        draft.data = payload.data;
        break;
      case Types.load_studant_failure:
        draft.loading = false;
        draft.error = true;
        break;
      //add studant
      case Types.add_studant_request:
        draft.loading = true;
        break;
      case Types.add_studant_success:
        draft.loading = false;
        draft.data = [payload.studant, ...state.data];
        break;
      case Types.add_studant_failure:
        draft.loading = false;
        draft.error = true;
        break;
      default:
        break;
    }
  });
};
