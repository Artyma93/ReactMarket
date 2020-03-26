import { createSelector } from "reselect";

export const getUsersCourseAutoStateFetching = state => {
  return state.usersCourseAutoState.fetching;
};

export const getUsersCourseAutoStateUsersTable = state => {
  return state.usersCourseAutoState.usersCourseTable;
};

export const getUsersCourseAutoStateUsers = createSelector(
  getUsersCourseAutoStateUsersTable,
  table => {
    return table;
  }
);

export const getUsersCourseAutoStateError = state => {
  return state.usersCourseAutoState.error;
};
export const getUsersCourseAutoStatePageSize = state => {
  return state.usersCourseAutoState.pageSize;
};
export const getUsersCourseAutoStateTotalUsersCount = state => {
  return state.usersCourseAutoState.totalUsersCount;
};
export const getUsersCourseAutoStateCurrentPage = state => {
  return state.usersCourseAutoState.currentPage;
};
export const getUsersCourseAutoStateIsfollowingInProgress = state => {
  return state.usersCourseAutoState.isfollowingInProgress;
};
