import * as types from "./UsersCourseLoginConstants";

// reducer with initial state
const initialState = {
  fetching: false,
  login: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.UC_API_CALL_LOGIN_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.UC_API_CALL_LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        userCourseAuth: true,
        error: null
      };
    case types.UC_API_CALL_LOGIN_FAILURE:
      return {
        ...state,
        fetching: false,
        login: false,
        error: action.error
      };
    default:
      return state;
  }
}
