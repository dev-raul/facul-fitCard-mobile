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
        draft.error = false;
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
        draft.error = false;
        break;
      case Types.add_studant_success:
        draft.loading = false;
        draft.data = [payload.studant, ...state.data];
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
        draft.loading = false;
        let newData =
          state.data.find((studant) => studant.id !== payload.studantId) || [];

        const verify = Array.isArray(newData);
        if (!verify) {
          draft.data = [newData];
        } else {
          draft.data = newData;
        }

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
