import * as types from "./WeatherforecastConstants";

// export function showLoginForm(show) {
//   return {
//     type: types.API_CALL_REQUEST,
//     payload: show
//   };
// }

export function onRequestWeatherforecast() {
  return {
    type: types.API_CALL_REQUEST
  };
}
