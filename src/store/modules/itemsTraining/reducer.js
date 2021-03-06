import produce from 'immer';
import Types from '../../Types';
const initialState = {
  loading: false,
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
        const {item_trainings, ...rest} = payload.data;

        draft.training = {...rest};
        draft.data = item_trainings;
        draft.loading = false;
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
        draft.data = [payload.item, ...state.data];
        draft.loading = false;
        break;
      case Types.add_item_training_failure:
        draft.loading = false;
        draft.error = payload.error || true;
        break;

      //delete item training
      case Types.delete_item_training_request:
        draft.error = false;
        break;
      case Types.delete_item_training_success:
        let {itemId} = payload;
        let newData = state.data.filter((item) => item.id !== itemId) || [];

        const verify = Array.isArray(newData);
        if (!verify) {
          draft.data = [newData];
        } else {
          draft.data = newData;
        }
        draft.loading = false;
        break;
      case Types.delete_item_training_failure:
        draft.loading = false;
        draft.error = true;
        break;

      //update item training
      case Types.update_item_training_request:
        draft.loading = true;
        draft.error = false;
        break;
      case Types.update_item_training_success:
        draft.data = state.data.map((item) => {
          if (item.id === payload.data.id) {
            return {...item, ...payload.data};
          }
        });

        draft.loading = false;
        break;
      case Types.update_item_training_failure:
        draft.error = payload.error || true;
        draft.loading = false;
        break;
      default:
        break;
    }
  });
};
