import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {Alert} from 'react-native';

import apiConfig from '../config/api-config';

export const userApiClient = (
  config = {
    baseURL: apiConfig.baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3000,
  },
) => axios.create(config);

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
export function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  try {
    // return JSON.stringify(response);
    return JSON.parse(response);
  } catch (e) {
    // console.log('error parse response', e);
    return response;
  }
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} method
 * @param  {string} url       The URL we want to request
 * @param  {object} [data]
 * @param  {object} [params]
 * @param  {object} [headers] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export async function request(
  method,
  url,
  {
    data,
    params,
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
  auth = false,
  token,
  reload = false,
) {
  let value = await AsyncStorage.getItem('token');
  console.log('token in async storage', value);

  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (!headers) {
    headers = defaultHeaders;
  }

  if (auth) {
    if (!value) {
      value = token;
      if (value) {
        headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${value}`,
        };

        console.log('HEADER SET', headers);
      }
    }
  }

  const run = () =>
    axios({method, url, data, params, headers})
      .then((res) => {
        // const error = new Error('response.statusText');
        // throw error;
        return checkStatus(res);
      })
      .then(parseJSON)
      .catch((e) => {
        console.log('error request', e);
        Alert.alert('Alert', 'Silahkan cek koneksi internet anda.', [
          {
            text: 'Muat ulang',
            onPress: () => {
              // console.log('muat ulang', reload);
              reload !== false ? run() : false;
            },
          },
        ]);
      });

  return run();
}
