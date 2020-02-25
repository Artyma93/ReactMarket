import * as types from "./UsersCourseProfileConstans";

// reducer with initial state
const initialState = {
  fetching: false,
  userCourseProfile: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.UC_PROFILE_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.UC_PROFILE_API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        userCourseProfile: action.userCourseProfile,
        error: null
      };
    case types.UC_PROFILE_API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        userCourseProfile: null,
        error: action.error
      };
    default:
      return state;
  }
}
