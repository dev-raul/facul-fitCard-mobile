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
      //load training
      case Types.load_studant_training_request:
        draft.loading = true;
        draft.error = false;
        break;
      case Types.load_studant_training_success:
        draft.data = payload.data;
        draft.loading = false;
        break;
      case Types.load_studant_training_failure:
        draft.loading = false;
        draft.error = true;
        break;

      //add training

      case Types.add_studant_training_request:
        draft.loading = true;
        draft.error = false;
        break;
      case Types.add_studant_training_success:
        let find =
          state.data.filter((training) => training.id !== payload.data) || [];
        const verifyAdd = Array.isArray(find);

        if (verifyAdd) {
          draft.data = [payload.data, ...find];
        } else {
          draft.data = [payload.data, find];
        }

        draft.loading = false;
        break;
      case Types.add_studant_training_failure:
        draft.loading = false;
        draft.error = true;
        break;

      //delete training
      case Types.delete_studant_training_request:
        break;
      case Types.delete_studant_training_success:
        let newData =
          state.data.filter((training) => training.id !== payload.trainingId) ||
          [];

        const verify = Array.isArray(newData);
        if (!verify) {
          draft.data = [newData];
        } else {
          draft.data = newData;
        }

        draft.loading = false;
        break;
      case Types.delete_studant_training_failure:
        draft.loading = false;
        draft.error = true;
        break;
      default:
        break;
    }
  });
};
