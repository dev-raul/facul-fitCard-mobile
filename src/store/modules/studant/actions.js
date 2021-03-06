import Types from '../../Types';
export const loadStudantRequest = () => {
  return {
    type: Types.load_studant_request,
  };
};
export const loadStudantSuccess = (data) => {
  return {
    type: Types.load_studant_success,
    payload: {data},
  };
};

export const loadStudantFailure = () => {
  return {
    type: Types.load_studant_failure,
  };
};
export const addStudantRequest = (data) => {
  return {
    type: Types.add_studant_request,
    payload: {data},
  };
};
export const addStudantSuccess = (studant) => {
  return {
    type: Types.add_studant_success,
    payload: {studant},
  };
};

export const addStudantFailure = (error) => {
  return {
    type: Types.add_studant_failure,
    payload: {error},
  };
};
export const deleteStudantRequest = (studantId) => {
  return {
    type: Types.delete_studant_request,
    payload: {studantId},
  };
};
export const deleteStudantSuccess = (studantId) => {
  return {
    type: Types.delete_studant_success,
    payload: {studantId},
  };
};

export const deleteStudantFailure = () => {
  return {
    type: Types.delete_studant_failure,
  };
};
