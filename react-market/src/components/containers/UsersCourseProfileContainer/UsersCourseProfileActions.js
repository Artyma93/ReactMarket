import * as types from "./UsersCourseProfileConstants";

export const fetchUsersCourseAutoRequest = () => {
  return {
    type: types.UC_PROFILE_API_CALL_REQUEST
  };
};

export const fetchUsersCourseAutoSuccess = response => {
  return {
    type: types.UC_PROFILE_API_CALL_SUCCESS,
    userCourseProfile: response.data,
  };
};

export const fetchUsersCourseAutoFail = () => {
  return {
    type: types.UC_PROFILE_API_CALL_FAILURE
  };
};

export const fetchUsersCourseAuto = (page) => {
  return {
    type: types.UC_PROFILE_API_CALL_FETCH,
    page
  };
};

