import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
// import * as types from "../components/containers/Dog/DogConstans";
import * as types from "./UsersCourseAutoConstants";

import * as actions from "./UsersCourseAutoActions";

import { UsersCourseApi } from "../../../api/UsersCourseApi";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(types.UC_AUTO_USERS_FOLLOWED_START, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
// action.page
function* workerSaga(action) {
  // debugger
  // console.log("workerSaga");
  // debugger;
  if (action.typeFollowed === "FOLLOW") {
    try {
      yield put(actions.UsersCourseAutoIsFollowedProgressTrue(action.userId));
      //==== Вариант 1
      // const response = yield axios
      //   .post(
      //     `https://social-network.samuraijs.com/api/1.0/follow/${action.userId}`,
      //     {},
      //     {
      //       withCredentials: true,
      //       headers: { "API-KEY": "062c9fb9-ca31-49b2-b1ce-fd99fe7877c3" }
      //     }
      //   )
      //   .then(data => data);
      //==== Конец Вариант 1
      //==== Вариант 2
      const response = yield UsersCourseApi.followUser(action.userId).then(
        data => data
      );
      //==== Конец Вариант 2

      // debugger;
      if (response.data.resultCode === 0) {
        yield put(actions.UsersCourseAutoFollow(action.userId));
      }
      yield put(actions.UsersCourseAutoIsFollowedProgressFalse(action.userId));
    } catch {
      yield put(actions.UsersCourseAutoIsFollowedProgressFalse(action.userId));
    }
  } else {
  }

  // debugger;
  if (action.typeFollowed === "UNFOLLOW") {
    try {
      yield put(actions.UsersCourseAutoIsFollowedProgressTrue(action.userId));

      //==== Вариант 1
      // const response = yield axios
      //   .delete(
      //     `https://social-network.samuraijs.com/api/1.0/follow/${action.userId}`,
      //     // {},
      //     {
      //       withCredentials: true,
      //       headers: { "API-KEY": "062c9fb9-ca31-49b2-b1ce-fd99fe7877c3" }
      //     }
      //   )
      //   .then(data => data);
      //==== Конец Вариант 1
      //==== Вариант 2
      const response = yield UsersCourseApi.unfollowUser(action.userId).then(
        data => data
      );
      //==== Конец Вариант 2
      // debugger;
      if (response.data.resultCode === 0) {
        yield put(actions.UsersCourseAutoUnFollow(action.userId));
      }
      yield put(actions.UsersCourseAutoIsFollowedProgressFalse(action.userId));
    } catch {
      yield put(actions.UsersCourseAutoIsFollowedProgressFalse(action.userId));
    }

    // yield put(actions.UsersCourseAutoUnFollow(action.userId));
  }

  // // yield put(actions.fetchUsersCourseAutoRequest());
  // try {
  //   // console.log("action.page:" + action.currentPage)
  //   // debugger;
  //   const response = yield axios
  //     .get(
  //       `https://social-network.samuraijs.com/api/1.0/users?page=${
  //         action.currentPage
  //       }&&count=${100}`
  //     )
  //     .then(data => data);
  //   // console.log("response: ")
  //   // console.log(response)
  //   yield put(actions.fetchUsersCourseAutoSuccess(response));
  // } catch (error) {
  //   // console.log(error)
  //   yield put(actions.fetchUsersCourseAutoFail(error));
  // }
}
