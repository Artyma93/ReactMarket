import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
// import * as types from "../components/containers/Dog/DogConstans";
import * as types from "./UsersCourseAutoConstans";

import * as actions from "./UsersCourseAutoActions";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(types.UC_AUTO_SET_CURRENT_PAGE, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
// action.page
function* workerSaga(action) {
  yield put(actions.fetchUsersCourseAutoRequest());
  try {
    // console.log("action.page:" + action.currentPage)
    // debugger;
    const response = yield axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${action.currentPage}&&count=${6}`
      )
      .then(data => data);

    yield put(actions.fetchUsersCourseAutoSuccess(response));
  } catch (error) {
    // console.log(error)
    yield put(actions.fetchUsersCourseAutoFail(error));
  }
}