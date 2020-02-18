import { all } from "redux-saga/effects";

import dogSaga from "./dogSaga";
// import statsSaga from "./statsSaga";
import weatherforecastSaga from "./weatherforecastSaga";
import usersCourseSaga from "./usersCourseSaga";

export default function* rootSaga() {
  yield all([dogSaga(), weatherforecastSaga(), usersCourseSaga()]);
}
