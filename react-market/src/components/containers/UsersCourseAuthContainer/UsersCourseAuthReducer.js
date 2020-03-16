import * as types from "./UsersCourseAuthConstants";
import * as typesLogout from "../UsersCourseLogoutContainer/UsersCourseLogoutConstants";

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
    case typesLogout.UC_API_CALL_LOGOUT_SUCCESS:
      return {
        ...state,
        fetching: action.fetching,
        userCourseAuth: action.userCourseAuth,
        error: action.error,
        isAuth: action.isAuth
      };
    default:
      return state;
  }
}
