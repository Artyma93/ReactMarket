import * as types from "./UsersCourseConstants";

export function onRequestUsersCourse() {
  return {
    type: types.API_CALL_REQUEST,
  };
}

// export function onRequestUsersCourse() {
//   return {
//     type: types.API_CALL_REQUEST
//   };
// }

export function onRequestUsersCoursePagination(payload) {
  return {
    type: types.API_CALL_REQUEST,
    payload: payload
  };
}

export function onRequestUsersCoursePaginationParam(
  pageSize,
  totalUsersCount,
  currentPage
) {
  return {
    type: types.API_CALL_REQUEST,
    pageSize: pageSize,
    totalUsersCount: totalUsersCount,
    currentPage: currentPage
  };
}


export const fetchUsersCourse = (page=21) => {
  return {
    type: types.FETCH_USERSCOURSE,
    page
  }
}