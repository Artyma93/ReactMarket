// import React from "react";
// import ReactDOM from "react-dom";
// import reducer from "./UsersCourseAutoReducer";
// import { setCurrentPage } from "./UsersCourseAutoActions";

// import saga from "./UsersCourseAutoFetchSaga"

// it("UsersCourseAutoReducer go fetch", () => {
//   //1. test data
//   let action = setCurrentPage(1);
//   const initialState = {
//     fetching: false,
//     usersCourseTable: null,
//     error: null,
//     pageSize: 5,
//     totalUsersCount: 0,
//     currentPage: 1,
//     isfollowingInProgress: []
//     // pageFetch: 1
//   };

//   // 2. action
//   let newState = reducer(initialState, action);
//   // 3. expectation
//   console.log(newState)
//   expect(newState.usersCourseTable.length).toBe(2624);
// });
