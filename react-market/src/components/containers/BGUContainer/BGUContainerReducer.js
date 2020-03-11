import * as types from "./BGUContainerConstants";

// reducer with initial state
const initialState = {
  fetching: false,
  budget: null,
  error: null,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
  // pageFetch: 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BGU_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.BGU_API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        budget: action.budget,
      };
    case types.BGU_API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        budget: null,
        error: action.error
      };
    case types.BGU_SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case types.BGU_SET_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };

    default:
      return state;
  }
}
