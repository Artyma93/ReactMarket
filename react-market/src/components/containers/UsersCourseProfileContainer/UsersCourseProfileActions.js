import * as types from "./UsersCourseProfileConstans";

export const fetchUsersCourseAutoRequest = () => {
  return {
    type: types.UC_PROFILE_API_CALL_REQUEST
  };
};

export const fetchUsersCourseAutoSuccess = response => {
  return {
    type: types.UC_PROFILE_API_CALL_SUCCESS,
    usersCourseTable: response.data,
    totalUsersCount: response.data.totalCount,
    pageSize: 100,
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

