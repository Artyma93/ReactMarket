import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
// import * as types from "../components/containers/Dog/DogConstans";
import * as types from "./UsersCourseAutoConstans";

import * as actions from "./UsersCourseAutoActions";

import {getUsers} from "../../../api/UsersCourseApi";

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
    //==== Вариант 1
    // const response = yield axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${
    //       action.currentPage
    //     }&&count=${100}`,
    //     { withCredentials: true }
    //   )
    //   .then(data => data);
    //==== Конец Вариант 1
    //==== Вариант 2
    const pageSize = 100
    const response = yield getUsers(action.currentPage, pageSize).then(data => data);
    //==== Конец Вариант 2
    // console.log("response: ")
    // console.log(response)
    yield put(actions.fetchUsersCourseAutoSuccess(response));
  } catch (error) {
    // console.log(error)
    yield put(actions.fetchUsersCourseAutoFail(error));
  }
}
