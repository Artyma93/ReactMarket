import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "./WeatherforecastConstans";

// reducer with initial state
const initialState = {
  fetching: false,
  weatherforecastTable: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, weatherforecastTable: action.weatherforecastTable };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}
