import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "./LandingPageConstans";

export function showLoginForm(show) {
    return {
        type: API_CALL_REQUEST,
        payload: show
    }
}