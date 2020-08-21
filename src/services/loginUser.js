import {request, userApiClient} from './index';
import {endPoints} from '../config/api-config';

// example
export const loginUser = (username, password) => {
  // set your excact endPoints
  return request('GET', endPoints.testLogin(), {}, false, undefined, true)
    .then((res) => {
      // console.log('res api', res);
      return {
        data: res.data.data,
        success: true,
        message: 'Success',
      };
    })
    .catch((e) => {
      console.log('error', e);
      return {
        success: false,
        message: e,
      };
    });
};

export const loginUser2 = (username, password) => {
  // set your excact endPoints
  return userApiClient()
    .get(endPoints.login())
    .then((res) => res)
    .catch((e) => e);
};
