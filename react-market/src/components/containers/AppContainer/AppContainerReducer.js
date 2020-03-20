import * as types from "./AppContainerConstants";

// reducer with initial state
const initialState = {
  initializedStart: false,
  initializedSuccess: false,
  initializedFail: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.APP_INITIALAZED_START:
      return {
        ...state,
        initializedStart: true,
        initializedSuccess: false,
        initializedFail: null
      };
    case types.APP_INITIALAZED_SUCCESS:
      return {
        ...state,
        initializedStart: false,
        initializedSuccess: true,
        initializedFail: null
      };
    case types.APP_INITIALAZED_FAIL:
      return {
        ...state,
        initializedStart: false,
        initializedSuccess: false,
        initializedFail: action.error
      };
    default:
      return state;
  }
}
