import Types from '../../Types';
export const loadTrainingRequest = () => {
  return {
    type: Types.load_training_request,
    payload: {},
  };
};
export const loadTrainingSuccess = (data) => {
  return {
    type: Types.load_training_success,
    payload: {data},
  };
};

export const loadTrainingFailure = () => {
  return {
    type: Types.load_training_failure,
  };
};
