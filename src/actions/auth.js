import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_FULL_NAME_REGISTER,
  SET_CONFIRM_PASSWORD,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
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
const setFullNameRegister = fullName => ({ type: SET_FULL_NAME_REGISTER, payload: fullName });
const setConfirmPassword = confirmPassword => ({ type: SET_CONFIRM_PASSWORD, payload: confirmPassword });

const registerRequest = () => ({ type: REGISTER_REQUEST, payload: null });
const registerSuccess = response => ({ type: REGISTER_SUCCESS, payload: response });
const registerFailure = error => ({ type: REGISTER_FAILURE, payload: error });

export function register(username, fullName, password, confirmPassword) {
  return (dispatch) => {
    dispatch(registerRequest());
    callAPI('POST', apiPaths.register, {
      Username: username,
      Password: password,
      ConfirmPassword: confirmPassword,
      FullName: fullName,
    },
    null,
    (response) => {
      dispatch(registerSuccess(response));
    },
    (error) => {
      dispatch(registerFailure(error));
    });
  };
}

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
  setFullNameRegister,
  setConfirmPassword,
  setPassword,
  logInRequest,
  logInSuccess,
  logInFailure,
  setToken,
  logOut,
};
