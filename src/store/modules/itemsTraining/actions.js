import Types from '../../Types';
export const loadItemTrainingRequest = (trainingId) => {
  return {
    type: Types.load_item_training_request,
    payload: {trainingId},
  };
};
export const loadItemTrainingSuccess = (data) => {
  return {
    type: Types.load_item_training_success,
    payload: {data},
  };
};

export const loadItemTrainingFailure = () => {
  return {
    type: Types.load_item_training_failure,
  };
};

export const addItemTrainingRequest = (trainingId, data) => {
  return {
    type: Types.add_item_training_request,
    payload: {data, trainingId},
  };
};
export const addItemTrainingSuccess = (item) => {
  return {
    type: Types.add_item_training_success,
    payload: {item},
  };
};

export const addItemTrainingFailure = () => {
  return {
    type: Types.add_item_training_failure,
  };
};

export const deleteItemTrainingRequest = (trainingId, itemId) => {
  return {
    type: Types.delete_item_training_request,
    payload: {trainingId, itemId},
  };
};
export const deleteItemTrainingSuccess = (itemId) => {
  return {
    type: Types.delete_item_training_success,
    payload: {itemId},
  };
};

export const deleteItemTrainingFailure = () => {
  return {
    type: Types.delete_item_training_failure,
  };
};
