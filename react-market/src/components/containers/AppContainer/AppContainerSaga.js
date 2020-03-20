import { takeLatest, call, put, select } from "redux-saga/effects";

// import * as types from "../components/containers/Dog/DogConstans";
import * as types from "./AppContainerConstants";

import * as actions from "./AppContainerActions";

import { UsersCourseApi } from "../../../api/UsersCourseApi";

import { stopSubmit } from "redux-form";

import { store } from "../../../index";

import * as actionsAuth from "../UsersCourseAuthContainer/UsersCourseAuthActions";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(types.APP_INITIALAZED_START, workerSaga);
}

const getLoginData = ({
  form: {
    UsersCourseLogin: { values }
  }
}) => {
  return {
    values: values
  };
};

function* workerSaga(action) {
  try {
    // const LoginData = yield select(getLoginData);
    // const promise = yield put(actionsAuth.fetchUsersCourseAuto());
    // promise.then(() => {
    // });
    // yield put(actionsAuth.fetchUsersCourseAuto());
    yield put(actions.AppInitialazedSuccess());
  } catch (error) {
    yield put(actions.AppInitialazedFail(error));
  }
}
