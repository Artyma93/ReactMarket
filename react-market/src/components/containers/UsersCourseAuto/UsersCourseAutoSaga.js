import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
// import * as types from "../components/containers/Dog/DogConstans";
import * as types from "./UsersCourseAutoConstans";

import * as actions from "./UsersCourseAutoActions";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(types.UC_AUTO_API_CALL_FETCH, workerSaga);
}

function fetchUsersCourse() {
  return axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${20}&&count=${6}`
    )
    .then(data => data);
}

// worker saga: makes the api call when watcher saga sees the action
// action.page
function* workerSaga(action) {
  yield put(actions.fetchUsersCourseAutoRequest());
  try {
    console.log(`action page: ${action.page}`);
    const response = yield axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${action.page}&&count=${6}`
      )
      .then(data => data);
    // console.log(`action page: ${action.page}`);
    // const pageFetchS = 1;
    // const response = yield call(fetchUsersCourse);
    // const response = yield call(
    //   axios.get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${
    //       action.page
    //     }&&count=${6}`
    //   )
    // );
    // const usersCourse = response.data;
    // const totalUsersCount = usersCourseTable.totalCount;

    // const response = yield call(fetchUsersCourse);
    // const usersCourseTable = response.data;
    // const totalUsersCount = usersCourseTable.totalCount;

    // dispatch a success action to the store with the new dog
    // yield put({
    //   type: types.UC_AUTO_API_CALL_SUCCESS,
    //   usersCourseTable,
    //   pageSize: 100,
    //   totalUsersCount: totalUsersCount,
    //   currentPage: action.page,
    //   pageFetch: action.page
    // });

    // const fetchedFilms = { count: 0, results: [], next: '', page: 1 };

    yield put(actions.fetchUsersCourseAutoSuccess(response));
  } catch (error) {
    // console.log(error)
    yield put(actions.fetchUsersCourseAutoFail(error));
  }
}