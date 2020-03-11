import * as types from "./UsersCourseLoginConstants";

export const fetchUsersCourseAutoRequest = () => {
  return {
    type: types.UC_AUTH_API_CALL_REQUEST
  };
};

export const fetchUsersCourseAutoSuccess = response => {
  return {
    type: types.UC_AUTH_API_CALL_SUCCESS,
    userCourseAuth: response.data
  };
};

export const fetchUsersCourseAutoFail = () => {
  return {
    type: types.UC_AUTH_API_CALL_FAILURE
  };
};

export const fetchUsersCourseAuto = page => {
  return {
    type: types.UC_AUTH_API_CALL_FETCH,
    page
  };
};

export const UsersCourseLoginRequest = (email, password, rememberMe) => {
  return {
    type: types.UC_API_CALL_LOGIN
  };
};

export const UsersCourseLoginSuccess = () => {
  return {
    type: types.UC_API_CALL_LOGIN_SUCCESS
  };
};

export const UsersCourseLoginFail = () => {
  return {
    type: types.UC_API_CALL_LOGIN_FAILURE
  };
};
