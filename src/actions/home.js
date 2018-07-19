import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from './types';

import { callAPI, apiPaths } from '../services';

const getProductRequest = () => ({ type: GET_PRODUCT_REQUEST, payload: null });
const getProductSuccess = data => ({ type: GET_PRODUCT_SUCCESS, payload: data });
const getProductFailure = error => ({ type: GET_PRODUCT_FAILURE, payload: error });

export function getProduct() {
  return (dispath) => {
    dispath(getProductRequest());
    try {
      callAPI('GET', apiPaths.getProduct, null, 'pageIndex=1&searchValue=',
        (products) => {
          dispath(getProductSuccess(products));
        },
        (error) => {
          dispath(getProductFailure(error));
        });
    } catch (error) {
      dispath(getProductFailure(error));
    }
  };
}

export {
  getProductRequest,
  getProductSuccess,
  getProductFailure,
};
