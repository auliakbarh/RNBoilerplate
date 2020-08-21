import {takeEvery, all} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';

import authSaga from './authSaga';

export default function* watch() {
  yield all([
    takeEvery(types.authActionTypes.LOGIN_REQUEST, authSaga.login),
    takeEvery(types.authActionTypes.LOGOUT_REQUEST, authSaga.logout),
  ]);
}
