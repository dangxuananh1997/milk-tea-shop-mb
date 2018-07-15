import {
  INCREASE_CART_BADGE_COUNT,
  DECREASE_CART_BADGE_COUNT,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from './types';

import { callAPI, apiPaths } from '../services';

const increaseCartBadgeCount = count => ({ type: INCREASE_CART_BADGE_COUNT, payload: count });
const decreaseCartBadgeCount = count => ({ type: DECREASE_CART_BADGE_COUNT, payload: count });

const getProductRequest = () => ({ type: GET_PRODUCT_REQUEST, payload: null });
const getProductSuccess = data => ({ type: GET_PRODUCT_SUCCESS, payload: data });
const getProductFailure = error => ({ type: GET_PRODUCT_FAILURE, payload: error });

export function getProduct() {
  return (dispath) => {
    dispath(getProductRequest());
    try {
      callAPI('GET', apiPaths.getProduct, null, 'pageIndex=1&searchValue=',
        (response) => {
          dispath(getProductSuccess(response.data));
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
  increaseCartBadgeCount,
  decreaseCartBadgeCount,
  getProductRequest,
  getProductSuccess,
  getProductFailure,
};
