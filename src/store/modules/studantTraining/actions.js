import Types from '../../Types';
export const loadStudantTrainingRequest = (studantId) => {
  return {
    type: Types.load_studant_training_request,
    payload: {studantId},
  };
};
export const loadStudantTrainingSuccess = (data) => {
  return {
    type: Types.load_studant_training_success,
    payload: {data},
  };
};

export const loadStudantTrainingFailure = () => {
  return {
    type: Types.load_studant_training_failure,
  };
};

export const deleteStudantTrainingRequest = (studantId, trainingId) => {
  return {
    type: Types.delete_studant_training_request,
    payload: {studantId, trainingId},
  };
};
export const deleteStudantTrainingSuccess = (trainingId) => {
  return {
    type: Types.delete_studant_training_success,
    payload: {trainingId},
  };
};

export const deleteStudantTrainingFailure = () => {
  return {
    type: Types.delete_studant_training_failure,
  };
};
