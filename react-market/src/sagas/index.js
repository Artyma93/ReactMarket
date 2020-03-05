import { all } from "redux-saga/effects";

import dogSaga from "../components/containers/DogContainer/DogSaga";
// import statsSaga from "./statsSaga";
import weatherforecastSaga from "../components/containers/WeatherforecastContainer/WeatherforecastSaga";
import usersCourseSaga from "../components/containers/UsersCourseContainer/UsersCourseSaga";
import usersCourseAutoFetchSaga from "../components/containers/UsersCourseAutoContainer/UsersCourseAutoFetchSaga";
import bguFetchSaga from "../components/containers/BGUContainer/BGUContainerFetchSaga";
import UsersCourseProfileFetchSaga from "../components/containers/UsersCourseProfileContainer/UsersCourseProfileFetchSaga";
import UsersCourseAuthFetchSaga from "../components/containers/UsersCourseAuthContainer/UsersCourseAuthFetchSaga";
import UsersCourseAutoFollowSaga from "../components/containers/UsersCourseAutoContainer/UsersCourseAutoFollowSaga";

export default function* rootSaga() {
  yield all([
    dogSaga(),
    weatherforecastSaga(),
    usersCourseSaga(),
    usersCourseAutoFetchSaga(),
    bguFetchSaga(),
    UsersCourseProfileFetchSaga(),
    UsersCourseAuthFetchSaga(),
    UsersCourseAutoFollowSaga()
  ]);
}
