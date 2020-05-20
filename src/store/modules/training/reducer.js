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
        draft.data = payload.data.trainings;
        break;
      case Types.load_training_failure:
        draft.loading = false;
        draft.error = true;
        break;

      //add training
      case Types.add_training_request:
        draft.loading = true;
        draft.error = false;
        break;
      case Types.add_training_success:
        draft.loading = false;

        draft.data = [payload.data, ...state.data];
        break;
      case Types.add_training_failure:
        draft.loading = false;
        draft.error = true;
        break;

      //deleye training
      case Types.delete_training_request:
        draft.error = false;
        break;
      case Types.delete_training_success:
        draft.loading = false;
        let {trainingId} = payload;
        let newData =
          state.data.filter((training) => training.id !== trainingId) || [];

        const verify = Array.isArray(newData);
        if (!verify) {
          draft.data = [newData];
        } else {
          draft.data = newData;
        }
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
