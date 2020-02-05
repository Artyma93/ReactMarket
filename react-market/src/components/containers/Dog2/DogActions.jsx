// import {
//   API_CALL_REQUEST,
//   API_CALL_SUCCESS,
//   API_CALL_FAILURE
// } from "./DogConstans";

import * as types from "./DogConstans";

export function showLoginForm(show) {
  return {
    type: types.API_CALL_REQUEST,
    payload: show
  };
}

// export function onRequestDog(show) {
//     return {
//       type: API_CALL_REQUEST,
//       payload: show
//     };
//   }

// export function onRequestDog() {
//   return {
//     type: API_CALL_REQUEST
//   };
// }

export function onRequestDog() {
  return {
    type: types.API_CALL_REQUEST
  };
}
