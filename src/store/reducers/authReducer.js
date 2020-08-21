import {authActionTypes} from '../actions/actionTypes';

const initialState = {
  profile: {},
  token: '',
  isLoadingLogin: false,
  isLoadingLogout: false,
  errorLogin: '',
  errorLogout: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case authActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case authActionTypes.RESET_TOKEN:
      return {
        ...state,
        token: '',
      };
    case authActionTypes.LOGIN_REQUEST_START:
      return {
        ...state,
        isLoadingLogin: true,
      };
    case authActionTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isLoadingLogin: false,
      };
    case authActionTypes.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        isLoadingLogin: false,
        errorLogin: action.payload,
      };
    case authActionTypes.LOGOUT_REQUEST_START:
      return {
        ...state,
        isLoadingLogout: true,
      };
    case authActionTypes.LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        isLoadingLogout: false,
        token: '',
      };
    case authActionTypes.LOGOUT_REQUEST_FAIL:
      return {
        ...state,
        isLoadingLogout: false,
        errorLogout: action.payload,
      };
    default:
      return state;
  }
}
