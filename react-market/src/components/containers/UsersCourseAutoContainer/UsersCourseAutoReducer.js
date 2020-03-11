import * as types from "./UsersCourseAutoConstants";

// reducer with initial state
const initialState = {
  fetching: false,
  usersCourseTable: null,
  error: null,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isfollowingInProgress: []
  // pageFetch: 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.UC_AUTO_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.UC_AUTO_API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        usersCourseTable: action.usersCourseTable,
        pageSize: action.pageSize,
        totalUsersCount: action.totalUsersCount
        // currentPage: action.currentPage
        // pageFetch: action.pageFetch
      };
    case types.UC_AUTO_API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        usersCourseTable: null,
        error: action.error
      };
    case types.UC_AUTO_SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case types.UC_AUTO_SET_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };

    case types.UC_AUTO_USERS_FOLLOW:
      // debugger;
      const idxFollow = state.usersCourseTable.items.findIndex(
        item => item.id === action.userId
      );
      const oldItemFollow = state.usersCourseTable.items[idxFollow];
      const newItemFollow = { ...oldItemFollow, followed: true };

      return {
        ...state,
        usersCourseTable: {
          ...state.usersCourseTable,
          items: [
            ...state.usersCourseTable.items.slice(0, idxFollow),
            newItemFollow,
            ...state.usersCourseTable.items.slice(idxFollow + 1)
          ]
        }
      };

    case types.UC_AUTO_USERS_UNFOLLOW:
      const idxUnFollow = state.usersCourseTable.items.findIndex(
        item => item.id === action.userId
      );
      const oldItemUnFollow = state.usersCourseTable.items[idxUnFollow];
      const newItemUnFollow = { ...oldItemUnFollow, followed: false };

      return {
        ...state,
        usersCourseTable: {
          ...state.usersCourseTable,
          items: [
            ...state.usersCourseTable.items.slice(0, idxUnFollow),
            newItemUnFollow,
            ...state.usersCourseTable.items.slice(idxUnFollow + 1)
          ]
        }
      };
    case types.UC_AUTO_USERS_IS_FOLLOWED_PROGRESS:
      return {
        ...state,
        isfollowingInProgress: action.isfollowingInProgress
      };

    case types.UC_AUTO_USERS_IS_FOLLOWED_PROGRESS_TRUE:
      return {
        ...state,
        isfollowingInProgress: [...state.isfollowingInProgress, action.userId]
      };

    case types.UC_AUTO_USERS_IS_FOLLOWED_PROGRESS_FALSE:
      return {
        ...state,
        isfollowingInProgress: [
          ...state.isfollowingInProgress.filter(id => id !== action.userId)
        ]
      };
    default:
      return state;
  }
}
