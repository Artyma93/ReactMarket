import { all } from "redux-saga/effects";

import dogSaga from "../components/containers/Dog/DogSaga";
// import statsSaga from "./statsSaga";
import weatherforecastSaga from "../components/containers/Weatherforecast/WeatherforecastSaga";
import usersCourseSaga from "../components/containers/UsersCourse/UsersCourseSaga";
import usersCourseAutoFetchSaga from "../components/containers/UsersCourseAuto/UsersCourseAutoFetchSaga";
import bguFetchSaga from "../components/containers/BGUContainer/BGUContainerFetchSaga";
import UsersCourseProfileFetchSaga from "../components/containers/UsersCourseProfileContainer/UsersCourseProfileFetchSaga";
import UsersCourseAuthFetchSaga from "../components/containers/UsersCourseAuthContainer/UsersCourseAuthFetchSaga";

export default function* rootSaga() {
  yield all([
    dogSaga(),
    weatherforecastSaga(),
    usersCourseSaga(),
    usersCourseAutoFetchSaga(),
    bguFetchSaga(),
    UsersCourseProfileFetchSaga(),
    UsersCourseAuthFetchSaga()
  ]);
}
