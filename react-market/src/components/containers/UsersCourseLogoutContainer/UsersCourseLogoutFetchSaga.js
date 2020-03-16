import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";
// import * as types from "../components/containers/Dog/DogConstans";
import * as types from "./UsersCourseLogoutConstants";

import * as actions from "./UsersCourseLogoutActions";

import { UsersCourseApi } from "../../../api/UsersCourseApi";

import { connect } from "react-redux";

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

// const mapStateToProps = state => {
//   return {
//     email: state.UsersCourseLogin.values.ucLogin,
//     password: state.UsersCourseLogin.values.ucPassword,
//     rememberMe: state.UsersCourseLogin.values.ucRememberMe
//   };
// };

// const LoginData = connect(mapStateToProps)({});
// console.log("LoginData");
// console.log(LoginData);
// worker saga: makes the api call when watcher saga sees the action
// action.page
function* workerSaga(action) {
  // yield put(actions.fetchUsersCourseAutoRequest());
  // const LoginData = yield select(({ form: { UsersCourseLogin } }) => {
  //   return {
  //     UsersCourseLogin: UsersCourseLogin
  //   };
  // });

  try {
    // const LoginData = yield select(getLoginData);
    // const LoginData = yield select(getLoginData);
    // debugger;
    yield UsersCourseApi.Logout().then(data => {
      if (data.data.resultCode === 0) {
        put(actions.UsersCourseLogoutSuccess(null, null, null, false));
      }
    });

    // yield put(actions.UsersCourseLogoutSuccess(null, null, null, false));
    // debugger;
    // const response2 = yield UsersCourseApi.AuthMe().then(data => {
    //   if (data.data.resultCode === 0) {
    //     return data.data;
    //   }
    // });
    // debugger;
    // yield put(actions.fetchUsersCourseAutoSuccess(response));
  } catch (error) {
    yield put(actions.UsersCourseLogoutFail(error));
  }
}
