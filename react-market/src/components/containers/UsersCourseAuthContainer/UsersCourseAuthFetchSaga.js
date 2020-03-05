import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
// import * as types from "../components/containers/Dog/DogConstans";
import * as types from "./UsersCourseAuthConstans";

import * as actions from "./UsersCourseAuthActions";

import { UsersCourseApi } from "../../../api/UsersCourseApi";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(types.UC_AUTH_API_CALL_FETCH, workerSaga);
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
    //   .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //     withCredentials: true
    //   })
    //   .then(data => {
    //     if (data.data.resultCode === 0) {
    //       return data.data;
    //     }
    //   });
    //==== Конец Вариант 1
    //==== Вариант 2
    const response = yield UsersCourseApi.AuthMe().then(data => {
      if (data.data.resultCode === 0) {
        return data.data;
      }
    });

    //==== Конец Вариант 2
    yield put(actions.fetchUsersCourseAutoSuccess(response));
  } catch (error) {
    // console.log(error)
    yield put(actions.fetchUsersCourseAutoFail(error));
  }
}
