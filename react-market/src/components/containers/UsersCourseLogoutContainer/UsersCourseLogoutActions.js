import * as types from "./UsersCourseLogoutConstants";

export const UsersCourseLogoutRequest = () => {
  return {
    type: types.UC_API_CALL_LOGOUT
  };
};

export const UsersCourseLogoutSuccess = (
  fetching,
  userCourseAuth,
  error,
  isAuth
) => {
  return {
    type: types.UC_API_CALL_LOGOUT_SUCCESS,
    fetching: fetching,
    userCourseAuth: userCourseAuth,
    error: error,
    isAuth: isAuth
  };
};

export const UsersCourseLogoutFail = error => {
  return {
    type: types.UC_API_CALL_LOGOUT_FAILURE,
    error: error
  };
};
