import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "./LandingPage2Constans";

export function onRequestDog() {
  return {
    type: API_CALL_REQUEST
  };
}
