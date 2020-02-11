import * as types from "./UsersCourseConstans";

// reducer with initial state
const initialState = {
  fetching: false,
  usersCourseTable: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.API_CALL_SUCCESS:
      return { ...state, fetching: false, usersCourseTable: action.usersCourseTable };
    case types.API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}
