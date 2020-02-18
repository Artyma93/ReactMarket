import * as actionTypes from "./actionTypes";

export const fetchWeatherforecastRequest = () => {
  return {
    type: actionTypes.WFC_API_CALL_REQUEST
  };
};

export const fetchWeatherforecastSuccess = () => {
  return {
    type: actionTypes.WFC_API_CALL_SUCCESS
  };
};

export const fetchWeatherforecastFail = () => {
  return {
    type: actionTypes.WFC_API_CALL_FAILURE
  };
};

export const fetchWeatherforecast = (weatherforecast) => {
  return {
    type: actionTypes.WFC_API_CALL_FETCH,
    weatherforecast
  };
};
