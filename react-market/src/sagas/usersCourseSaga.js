import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
// import * as types from "../components/containers/Dog/DogConstans";
import * as types from "../components/containers/UsersCourse/UsersCourseConstans";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(types.API_CALL_REQUEST, workerSaga);
}

function fetchUsersCourse() {
  return axios
    .get("https://localhost:44349/weatherforecast")
    .then(data => data);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchUsersCourse);
    const usersCourseTable = response.data;

    console.log("fetchUsersCourse");
    // dispatch a success action to the store with the new dog
    yield put({
      type: types.API_CALL_SUCCESS,
      usersCourseTable
    });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({
      type: types.API_CALL_FAILURE,
      error
    });
  }
}
