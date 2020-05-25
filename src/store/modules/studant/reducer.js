import produce from 'immer';
import Types from '../../Types';
const initialState = {
  loading: false,
  error: false,
  data: [],
};

export default (state = initialState, {type, payload}) => {
  return produce(state, (draft) => {
    switch (type) {
      //load studant
      case Types.load_studant_request:
        draft.loading = true;
        draft.error = false;
        break;
      case Types.load_studant_success:
        draft.data = payload.data;
        draft.loading = false;
        break;
      case Types.load_studant_failure:
        draft.loading = false;
        draft.error = true;
        break;

      //add studant
      case Types.add_studant_request:
        draft.loading = true;
        draft.error = false;
        break;
      case Types.add_studant_success:
        draft.data = [payload.studant, ...state.data];
        draft.loading = false;
        break;
      case Types.add_studant_failure:
        draft.loading = false;
        draft.error = true;
        break;

      //delete studant
      case Types.delete_studant_request:
        draft.loading = true;
        draft.error = false;
        break;
      case Types.delete_studant_success:
        let newData =
          state.data.filter((studant) => studant.id !== payload.studantId) ||
          [];

        const verify = Array.isArray(newData);
        if (!verify) {
          draft.data = [newData];
        } else {
          draft.data = newData;
        }

        draft.loading = false;
        break;
      case Types.delete_studant_failure:
        draft.loading = false;
        draft.error = true;
        break;
      default:
        break;
    }
  });
};
