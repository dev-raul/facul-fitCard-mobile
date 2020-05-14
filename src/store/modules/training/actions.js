import Types from '../../Types';
export const loadTrainingRequest = (studantId) => {
  return {
    type: Types.load_training_request,
    payload: {studantId},
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

export const deleteTrainingRequest = (studantId, trainingId) => {
  return {
    type: Types.delete_training_request,
    payload: {studantId, trainingId},
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
