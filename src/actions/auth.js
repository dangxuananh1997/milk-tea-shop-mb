import {
  SET_USERNAME,
  SET_PASSWORD,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SET_TOKEN,
  SET_LOADING,
  LOG_OUT,
} from './types';

import { apiPaths, callAPI } from '../services';

const setLoading = bool => ({ type: SET_LOADING, payload: bool });

const setUsername = username => ({ type: SET_USERNAME, payload: username });
const setPassword = password => ({ type: SET_PASSWORD, payload: password });

const logInRequest = () => ({ type: LOG_IN_REQUEST, payload: null });
const logInSuccess = token => ({ type: LOG_IN_SUCCESS, payload: token });
const logInFailure = error => ({ type: LOG_IN_FAILURE, payload: error });

export function logIn(username, password) {
  return (dispatch) => {
    dispatch(logInRequest());
    callAPI('POST', apiPaths.token, `grant_type=password&username=${username}&password=${password}`, null,
      (token) => {
        dispatch(logInSuccess(token));
      },
      (error) => {
        dispatch(logInFailure(error));
      });
  };
}

const setToken = (token, tokenExpiredTime) => ({ type: SET_TOKEN, payload: { token, tokenExpiredTime } });
const logOut = () => ({ type: LOG_OUT, payload: null });

export {
  setLoading,
  setUsername,
  setPassword,
  logInRequest,
  logInSuccess,
  logInFailure,
  setToken,
  logOut,
};
