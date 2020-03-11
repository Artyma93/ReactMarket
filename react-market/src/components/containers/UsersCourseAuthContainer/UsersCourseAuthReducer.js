import * as types from "./UsersCourseAuthConstants";

// reducer with initial state
const initialState = {
  fetching: false,
  userCourseAuth: null,
  error: null,
  isAuth: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.UC_AUTH_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null, isAuth: false };
    case types.UC_AUTH_API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        userCourseAuth: action.userCourseAuth,
        error: null,
        isAuth: true
      };
    case types.UC_AUTH_API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        userCourseAuth: null,
        error: action.error,
        isAuth: false
      };
    default:
      return state;
  }
}
