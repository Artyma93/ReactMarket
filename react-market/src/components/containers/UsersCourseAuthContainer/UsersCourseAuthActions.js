import * as types from "./UsersCourseAuthConstans";

export const fetchUsersCourseAutoRequest = () => {
  return {
    type: types.UC_AUTH_API_CALL_REQUEST
  };
};

export const fetchUsersCourseAutoSuccess = response => {
  return {
    type: types.UC_AUTH_API_CALL_SUCCESS,
    userCourseAuth: response.data,
  };
};

export const fetchUsersCourseAutoFail = () => {
  return {
    type: types.UC_AUTH_API_CALL_FAILURE
  };
};

export const fetchUsersCourseAuto = (page) => {
  return {
    type: types.UC_AUTH_API_CALL_FETCH,
    page
  };
};

