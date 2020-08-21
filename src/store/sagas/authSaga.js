import {put} from 'redux-saga/effects';
import * as authActions from '../actions/authAction';

function* login() {
  console.log('login start (in authSaga.js)');
  yield put(authActions.loginRequest().start());

  const response = {
    success: true,
    data: {token: '0123456789!@#$'},
    message: 'Success',
  };

  if (response.success) {
    yield put(authActions.loginRequest().success(response.data));
  } else {
    yield put(authActions.loginRequest().fail(response));
  }
}

function* logout() {
  console.log('logout start (in authSaga.js)');
  yield put(authActions.logoutRequest().start());

  const response = {
    success: true,
    message: 'Success',
  };

  if (response.success) {
    yield put(authActions.logoutRequest().success(response));
  } else {
    yield put(authActions.logoutRequest().fail(response));
  }
}

export default {
  login,
  logout,
};
