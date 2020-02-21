import { all } from "redux-saga/effects";

import dogSaga from "../components/containers/Dog/DogSaga"
// import statsSaga from "./statsSaga";
import weatherforecastSaga from "../components/containers/Weatherforecast/WeatherforecastSaga"
import usersCourseSaga from "../components/containers/UsersCourse/UsersCourseSaga"
import usersCourseAutoSaga from "../components/containers/UsersCourseAuto/UsersCourseAutoSaga"
import usersCourseAutoFetchSaga from "../components/containers/UsersCourseAuto/UsersCourseAutoFetchSaga"

export default function* rootSaga() {
  yield all([dogSaga(), weatherforecastSaga(), usersCourseSaga(), usersCourseAutoSaga(), usersCourseAutoFetchSaga()]);
}
