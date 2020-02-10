import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import * as types from "../components/containers/Dog/DogConstans";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(types.API_CALL_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
// function fetchDog() {
//   return axios({
//     method: "get",
//     url: "https://dog.ceo/api/breeds/image/random"
//   });
// }

function fetchDog() {
  return axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then(data => data);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    console.log("fetchDog");
    // dispatch a success action to the store with the new dog
    // yield put({ type: "API_CALL_SUCCESS", dog });
    yield put({
      type: types.API_CALL_SUCCESS,
      dog
    });
  } catch (error) {
    // dispatch a failure action to the store with the error
    // yield put({ type: "API_CALL_FAILURE", error });
    yield put({
      type: types.API_CALL_FAILURE,
      error
    });
  }
}
