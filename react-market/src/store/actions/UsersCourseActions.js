// import * as types from "./UsersCourseConstans";

// export function onRequestUsersCourse() {
//   return {
//     type: types.API_CALL_REQUEST,
//   };
// }

// // export function onRequestUsersCourse() {
// //   return {
// //     type: types.API_CALL_REQUEST
// //   };
// // }

// export function onRequestUsersCoursePagination(payload) {
//   return {
//     type: types.API_CALL_REQUEST,
//     payload: payload
//   };
// }

// export function onRequestUsersCoursePaginationParam(
//   pageSize,
//   totalUsersCount,
//   currentPage
// ) {
//   return {
//     type: types.API_CALL_REQUEST,
//     pageSize: pageSize,
//     totalUsersCount: totalUsersCount,
//     currentPage: currentPage
//   };
// }

// export const fetchUsersCourse = (page=21) => {
//   return {
//     type: types.FETCH_USERSCOURSE,
//     page
//   }
// }

import * as actionTypes from "./actionTypes";

export const fetchUsersCourseRequest = () => {
  return {
    type: actionTypes.UC_API_CALL_REQUEST
  };
};

export const fetchUsersCourseSuccess = () => {
  return {
    type: actionTypes.UC_API_CALL_SUCCESS
  };
};

export const fetchUsersCourseFail = () => {
  return {
    type: actionTypes.UC_API_CALL_FAILURE
  };
};

export const fetchUsersCourse = usersCourse => {
  return {
    type: actionTypes.UC_API_CALL_FETCH,
    usersCourse
  };
};
