import * as types from "./UsersCourseAutoConstans";

export const fetchUsersCourseAutoRequest = () => {
  return {
    type: types.UC_AUTO_API_CALL_REQUEST
  };
};

export const fetchUsersCourseAutoSuccess = response => {
  return {
    type: types.UC_AUTO_API_CALL_SUCCESS,
    usersCourseTable: response.data,
    totalUsersCount: response.data.totalCount,
    pageSize: 100,
    // currentPage: 2
  };
};

export const fetchUsersCourseAutoFail = () => {
  return {
    type: types.UC_AUTO_API_CALL_FAILURE
  };
};

export const fetchUsersCourseAuto = (page) => {
  return {
    type: types.UC_AUTO_API_CALL_FETCH,
    // page: 1,
    // page: page,
    // page: {...page}
    page
  };
};

export const setCurrentPage = currentPage => {
  return {
    type: types.UC_AUTO_SET_CURRENT_PAGE,
    currentPage: currentPage
  };
};
