import * as types from "./UsersCourseAutoConstans";

// reducer with initial state
const initialState = {
  fetching: false,
  usersCourseTable: null,
  error: null,
  pageSize: 5,
  totalUsersCount: 51,
  currentPage: 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        usersCourseTable: action.usersCourseTable,
        pageSize: action.pageSize,
        totalUsersCount: action.totalUsersCount,
        currentPage: action.currentPage
      };
    case types.API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        usersCourseTable: null,
        error: action.error
      };
    default:
      return state;
  }
}
