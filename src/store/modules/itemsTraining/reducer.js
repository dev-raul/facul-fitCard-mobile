import produce from 'immer';
import Types from '../../Types';
const initialState = {
  loading: null,
  error: false,
  training: {},
  data: [],
};

export default (state = initialState, {type, payload}) => {
  return produce(state, (draft) => {
    switch (type) {
      //load item training
      case Types.load_item_training_request:
        draft.loading = true;
        draft.error = false;
        break;
      case Types.load_item_training_success:
        draft.loading = false;
        const {item_trainings, ...rest} = payload.data;

        draft.training = {...rest};
        draft.data = item_trainings;
        break;
      case Types.load_item_training_failure:
        draft.loading = false;
        draft.error = true;
        break;

      //add item training
      case Types.add_item_training_request:
        draft.loading = true;
        draft.error = false;
        break;
      case Types.add_item_training_success:
        draft.loading = false;
        draft.data = [payload.item, ...state.data];
        break;
      case Types.add_item_training_failure:
        draft.loading = false;
        draft.error = true;
        break;

      //delete item training
      case Types.delete_item_training_request:
        // draft.loading = true;
        draft.error = false;
        break;
      case Types.delete_item_training_success:
        draft.loading = false;
        let {itemId} = payload;
        let newData = state.data.filter((item) => item.id !== itemId) || [];

        const verify = Array.isArray(newData);
        if (!verify) {
          draft.data = [newData];
        } else {
          draft.data = newData;
        }
        break;
      case Types.delete_item_training_failure:
        draft.loading = false;
        draft.error = true;
        break;
      default:
        break;
    }
  });
};
