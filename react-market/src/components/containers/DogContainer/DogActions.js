import * as types from "./DogConstants";

// export function showLoginForm(show) {
//   return {
//     type: types.API_CALL_REQUEST,
//     payload: show
//   };
// }

export function onRequestDog() {
  return {
    type: types.API_CALL_REQUEST
  };
}
