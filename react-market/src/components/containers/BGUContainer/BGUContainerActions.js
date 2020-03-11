import * as types from "./BGUContainerConstants";

export const fetchBGURequest = () => {
  return {
    type: types.BGU_API_CALL_REQUEST
  };
};

export const fetchBGUSuccess = response => {
  return {
    type: types.BGU_API_CALL_SUCCESS,
    budget: response.data,
  };
};

export const fetchBGUFail = () => {
  return {
    type: types.BGU_API_CALL_FAILURE
  };
};

export const fetchBGU = page => {
  return {
    type: types.BGU_API_CALL_FETCH,
    page
  };
};

export const setCurrentPage = currentPage => {
  return {
    type: types.BGU_SET_CURRENT_PAGE,
    currentPage: currentPage
  };
};

export const setTotalUsersCount = totalCount => {
  return {
    type: types.BGU_SET_USERS_COUNT,
    totalCount: totalCount
  };
};