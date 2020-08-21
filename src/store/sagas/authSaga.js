import {put, call} from 'redux-saga/effects';
import * as authActions from '../actions/authAction';
import AsyncStorage from '@react-native-community/async-storage';

import {loginUser, loginUser2} from '../../services/loginUser';

function* login() {
  console.log('login start (in authSaga.js)');
  yield put(authActions.loginRequest().start());

  // example of response from api
  // const response = {
  //   success: true,
  //   data: {token: '0123456789!@#$'},
  //   message: 'Success',
  // };

  // call api from mock up api
  const res = yield call(loginUser, 'username', 'password');
  // console.log('response api', JSON.stringify(res));

  // another way to use services
  // const test = yield call(loginUser2);
  // console.log('response api 2', JSON.stringify(test));

  if (res.success) {
    yield put(authActions.loginRequest().success(res.data));
    yield call(AsyncStorage.setItem, 'token', res.data.token);
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
    yield call(AsyncStorage.removeItem, 'token');
  } else {
    yield put(authActions.logoutRequest().fail(response));
  }
}

export default {
  login,
  logout,
};
