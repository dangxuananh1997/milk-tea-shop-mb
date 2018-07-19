import axios from 'axios';

import store from '../store';

import apiPaths from './apiPaths';

const callAPI = async (method = 'GET', path, data, params, successCallBack, errorCallBack) => {
  const { token } = store.getState().auth; // token
  const headerToken = token ? { Authorization: `bearer ${token.access_token}` } : null;

  return axios({
    method,
    url: `https://api-milktea-client.azurewebsites.net${path}`,
    headers: { ...headerToken },
    data,
    params,
  }).then(
    (response) => {
      successCallBack(response.data);
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
