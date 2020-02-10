import { all } from "redux-saga/effects";

import dogSaga from "./dogSaga";
// import statsSaga from "./statsSaga";
import weatherforecastSaga from "./weatherforecastSaga";

export default function* rootSaga() {
  yield all([dogSaga(), weatherforecastSaga()]);
}
