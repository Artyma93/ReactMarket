import * as actionTypes from "../actions/actionTypes";

// reducer with initial state
const initialState = {
  fetching: false,
  weatherforecastTable: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WFC_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case actionTypes.WFC_API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        weatherforecastTable: action.weatherforecastTable
      };
    case actionTypes.WFC_API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        weatherforecastTable: null,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
