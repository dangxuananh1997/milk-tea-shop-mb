import {
  GET_ORDER_LIST_REQUEST,
  GET_ORDER_LIST_SUCCESS,
  GET_ORDER_LIST_FAILURE,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILURE,
} from './types';

import { callAPI, apiPaths } from '../services';

const getOrderListRequest = () => ({ type: GET_ORDER_LIST_REQUEST, payload: null });
const getOrderListSuccess = orderList => ({ type: GET_ORDER_LIST_SUCCESS, payload: orderList });
const getOrderListFailure = error => ({ type: GET_ORDER_LIST_FAILURE, payload: error });

export function getOrderList() {
  return (dispatch) => {
    dispatch(getOrderListRequest());
    callAPI('GET', apiPaths.getOrderList, null, { pageIndex: 1 },
      (orderList) => {
        dispatch(getOrderListSuccess(orderList));
      },
      (error) => {
        dispatch(getOrderListFailure(error));
      });
  };
}

const getOrderDetailsRequest = () => ({ type: GET_ORDER_DETAILS_REQUEST, payload: null });
const getOrderDetailsSuccess = orderDetails => ({ type: GET_ORDER_DETAILS_SUCCESS, payload: orderDetails });
const getOrderDetailsFailure = error => ({ type: GET_ORDER_DETAILS_FAILURE, payload: error });

export function getOrderDetails(id) {
  return (dispatch) => {
    dispatch(getOrderDetailsRequest());
    callAPI('GET', apiPaths.getOrderDetails, null, { id },
      (orderDetails) => {
        dispatch(getOrderDetailsSuccess(orderDetails));
      },
      (error) => {
        dispatch(getOrderDetailsFailure(error));
      });
  };
}
