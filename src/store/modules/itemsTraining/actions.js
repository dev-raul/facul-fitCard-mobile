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
