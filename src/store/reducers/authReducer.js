import {authActionTypes} from '../actions/actionTypes';

const initialState = {
  profile: {},
  token: '',
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
    default:
      return state;
  }
}
