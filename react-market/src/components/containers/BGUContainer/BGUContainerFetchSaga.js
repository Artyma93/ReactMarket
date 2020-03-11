import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
// import * as types from "../components/containers/Dog/DogConstans";
import * as types from "./BGUContainerConstants";

import * as actions from "./BGUContainerActions";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(types.BGU_API_CALL_REQUEST, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
// action.page
function* workerSaga() {
  // yield put(actions.fetchBGURequest());
  try {
    // console.log("action.page:" + action.currentPage)
    // debugger;
    const response = yield axios
      .get("http://localhost:3000/bgu.json")
      .then(data => data);
    console.log("response: ");
    console.log(response);


    yield put(actions.fetchBGUSuccess(response));
  } catch (error) {
    // console.log(error)
    yield put(actions.fetchBGUFail(error));
  }
}
