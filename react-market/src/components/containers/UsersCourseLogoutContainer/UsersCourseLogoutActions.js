import * as types from "./UsersCourseLogoutConstants";

// export const fetchUsersCourseAutoRequest = () => {
//   return {
//     type: types.UC_AUTH_API_CALL_REQUEST
//   };
// };

// export const fetchUsersCourseAutoSuccess = response => {
//   return {
//     type: types.UC_AUTH_API_CALL_SUCCESS,
//     userCourseAuth: response.data
//   };
// };

// export const fetchUsersCourseAutoFail = () => {
//   return {
//     type: types.UC_AUTH_API_CALL_FAILURE
//   };
// };

// export const fetchUsersCourseAuto = page => {
//   return {
//     type: types.UC_AUTH_API_CALL_FETCH,
//     page
//   };
// };

export const UsersCourseLogoutRequest = (email, password, rememberMe) => {
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

export const UsersCourseLogoutFail = () => {
  return {
    type: types.UC_API_CALL_LOGOUT_FAILURE
  };
};
