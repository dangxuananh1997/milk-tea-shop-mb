import axios from 'axios';

import store from '../store';

import apiPaths from './apiPaths';

const callAPI = async (method = 'GET', path, data, params, successCallBack, errorCallBack) => {
  const { token } = store.getState() ? store.getState() : null; // token
  const headerToken = token ? { Authorization: `bearer ${token}` } : null;

  return axios({
    method,
    url: `https://api-milktea-admin.azurewebsites.net/api${path}`,
    headers: { ...headerToken },
    data,
    params,
  }).then(
    (response) => {
      successCallBack(response);
    },
    (error) => {
      errorCallBack(error);
    },
  ).catch(
    (error) => {
      console.log('axios error: ', error);
    },
  );
};

export {
  callAPI,
  apiPaths,
};
