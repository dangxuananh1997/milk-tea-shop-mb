import {
  SET_USERNAME,
  SET_PASSWORD,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
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

const getUserInfoRequest = () => ({ type: GET_USER_INFO_REQUEST, payload: null });
const getUserInfoSuccess = userInfo => ({ type: GET_USER_INFO_SUCCESS, payload: userInfo });
const getUserInfoFailure = error => ({ type: GET_USER_INFO_FAILURE, payload: error });

export function getUserInfo() {
  return (dispatch) => {
    dispatch(getUserInfoRequest());
    callAPI('GET', apiPaths.getUserInfo, null, null,
      (userInfo) => {
        dispatch(getUserInfoSuccess(userInfo));
      },
      (error) => {
        dispatch(getUserInfoFailure(error));
      });
  };
}

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
