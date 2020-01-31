import { all } from "redux-saga/effects";

import dogSaga from "./dogSaga";
// import statsSaga from "./statsSaga";

export default function* rootSaga() {
  yield all([dogSaga()]);
}
