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
import UsersCourseLoginFetchSaga from "../components/containers/UsersCourseLoginContainer/UsersCourseLoginFetchSaga";
import UsersCourseLogoutFetchSaga from "../components/containers/UsersCourseLogoutContainer/UsersCourseLogoutFetchSaga";
import AppContainerSaga from "../components/containers/AppContainer/AppContainerSaga";

export default function* rootSaga() {
  yield all([
    dogSaga(),
    weatherforecastSaga(),
    usersCourseSaga(),
    usersCourseAutoFetchSaga(),
    bguFetchSaga(),
    UsersCourseProfileFetchSaga(),
    UsersCourseAuthFetchSaga(),
    UsersCourseAutoFollowSaga(),
    UsersCourseLoginFetchSaga(),
    UsersCourseLogoutFetchSaga(),
    AppContainerSaga()
  ]);
}
