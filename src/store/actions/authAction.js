import {authActionTypes} from './actionTypes';

export const setToken = (token) => ({
  type: authActionTypes.SET_TOKEN,
  payload: token,
});

export const resetToken = () => ({
  type: authActionTypes.RESET_TOKEN,
});

export const loginRequest = () => ({
  call: () => ({type: authActionTypes.LOGIN_REQUEST}),
  start: () => ({type: authActionTypes.LOGIN_REQUEST_START}),
  success: (payload) => ({
    type: authActionTypes.LOGIN_REQUEST_SUCCESS,
    payload,
  }),
  fail: (payload) => ({type: authActionTypes.LOGIN_REQUEST_FAIL, payload}),
});

export const logoutRequest = () => ({
  call: () => ({type: authActionTypes.LOGOUT_REQUEST}),
  start: () => ({type: authActionTypes.LOGOUT_REQUEST_START}),
  success: (payload) => ({
    type: authActionTypes.LOGOUT_REQUEST_SUCCESS,
    payload,
  }),
  fail: (payload) => ({type: authActionTypes.LOGOUT_REQUEST_FAIL, payload}),
});
