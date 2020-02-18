// import * as types from "./UsersCourseAutoConstans";

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

export const fetchUsersCourseAutoRequest = () => {
  return {
    type: actionTypes.UC_AUTO_API_CALL_REQUEST
  };
};

export const fetchUsersCourseAutoSuccess = () => {
  return {
    type: actionTypes.UC_AUTO_API_CALL_SUCCESS
  };
};

export const fetchUsersCourseAutoFail = () => {
  return {
    type: actionTypes.UC_AUTO_API_CALL_FAILURE
  };
};

export const fetchUsersCourseAuto = usersCourse => {
  return {
    type: actionTypes.UC_AUTO_API_CALL_FETCH,
    usersCourse
  };
};
