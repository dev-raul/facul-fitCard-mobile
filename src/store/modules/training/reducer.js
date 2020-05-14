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
      //load training
      case Types.load_training_request:
        draft.loading = true;
        draft.error = false;
        break;
      case Types.load_training_success:
        draft.loading = false;
        draft.data = payload.data;
        break;
      case Types.load_training_failure:
        draft.loading = false;
        draft.error = true;
        break;

      //delete training
      case Types.delete_training_request:
        break;
      case Types.delete_training_success:
        draft.loading = false;
        draft.data =
          state.data.find((training) => training.id !== payload.trainingId) ||
          [];
        break;
      case Types.delete_training_failure:
        draft.loading = false;
        draft.error = true;
        break;
      default:
        break;
    }
  });
};
