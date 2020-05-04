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

export const addStudantFailure = () => {
  return {
    type: Types.add_studant_failure,
  };
};
