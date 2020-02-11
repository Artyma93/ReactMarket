import * as types from "./UsersCourseConstans";

export function onRequestUsersCourse() {
  return {
    type: types.API_CALL_REQUEST
  };
}
