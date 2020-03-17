import { takeLatest, call, put, select } from "redux-saga/effects";

// import * as types from "../components/containers/Dog/DogConstans";
import * as types from "./UsersCourseLogoutConstants";

import * as actions from "./UsersCourseLogoutActions";

import { UsersCourseApi } from "../../../api/UsersCourseApi";



// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(types.UC_API_CALL_LOGOUT, workerSaga);
}

// const getLoginData = state => state.UsersCourseLogin.values;
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
    yield UsersCourseApi.Logout().then(data => {
      if (data.data.resultCode === 0) {
        put(actions.UsersCourseLogoutSuccess(null, null, null, false));
      }
    });

    yield put(actions.UsersCourseLogoutSuccess(null, null, null, false));
  } catch (error) {
    yield put(actions.UsersCourseLogoutFail(error));
  }
}
