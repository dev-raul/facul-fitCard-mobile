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

export const addTrainingRequest = (data) => {
  return {
    type: Types.add_training_request,
    payload: {data},
  };
};
export const addTrainingSuccess = (data) => {
  return {
    type: Types.add_training_success,
    payload: {data},
  };
};

export const addTrainingFailure = () => {
  return {
    type: Types.add_training_failure,
  };
};

export const deleteTrainingRequest = (trainingId) => {
  return {
    type: Types.delete_training_request,
    payload: {trainingId},
  };
};
export const deleteTrainingSuccess = (trainingId) => {
  return {
    type: Types.delete_training_success,
    payload: {trainingId},
  };
};

export const deleteTrainingFailure = () => {
  return {
    type: Types.delete_training_failure,
  };
};
