import {authActionTypes} from './actionTypes';

export const setToken = (token) => ({
  type: authActionTypes.SET_TOKEN,
  payload: token,
});

export const resetToken = () => ({
  type: authActionTypes.RESET_TOKEN,
});
