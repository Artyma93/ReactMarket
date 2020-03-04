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
    pageSize: 100
    // currentPage: 2
  };
};

export const fetchUsersCourseAutoFail = () => {
  return {
    type: types.UC_AUTO_API_CALL_FAILURE
  };
};

export const fetchUsersCourseAuto = page => {
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

export const setTotalUsersCount = totalCount => {
  return {
    type: types.UC_AUTO_SET_CURRENT_PAGE,
    totalCount: totalCount
  };
};

export const UsersCourseAutoFollow = userId => {
  return {
    type: types.UC_AUTO_USERS_FOLLOW,
    userId: userId
  };
};

export const UsersCourseAutoUnFollow = userId => {
  return {
    type: types.UC_AUTO_USERS_UNFOLLOW,
    userId: userId
  };
};

export const UsersCourseAutoFollowedStart = (userId, typeFollowed) => {
  return {
    type: types.UC_AUTO_USERS_FOLLOWED_START,
    userId: userId,
    typeFollowed: typeFollowed
  };
};
