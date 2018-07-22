import {
  SET_CUSTOMER_NAME,
  SET_CONTACT_PHONE,
  SET_DELIVERY_ADDRESS,
  SET_PAYMENT_TYPE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  RESET_CREATE_ORDER_STATUS,
} from './types';

import { callAPI, apiPaths } from '../services';

const setCustomerName = customerName => ({ type: SET_CUSTOMER_NAME, payload: customerName });
const setContactPhone = contactPhone => ({ type: SET_CONTACT_PHONE, payload: contactPhone });
const setDeliveryAddress = deliveryAddress => ({ type: SET_DELIVERY_ADDRESS, payload: deliveryAddress });
const setPaymentType = paymentType => ({ type: SET_PAYMENT_TYPE, payload: paymentType });

const createOrderRequest = () => ({ type: CREATE_ORDER_REQUEST, payload: null });
const createOrderSuccess = order => ({ type: CREATE_ORDER_SUCCESS, payload: order });
const createOrderFailure = error => ({ type: CREATE_ORDER_FAILURE, payload: error });

export function createOrder(order) {
  return (dispatch) => {
    dispatch(createOrderRequest());
    callAPI('POST', apiPaths.createOrder, order, null,
      (orderResponse) => {
        dispatch(createOrderSuccess(orderResponse));
      },
      (error) => {
        dispatch(createOrderFailure(error));
      });
  };
}

const resetCreateOrderStatus = () => ({ type: RESET_CREATE_ORDER_STATUS, payload: null });

export {
  setCustomerName,
  setContactPhone,
  setDeliveryAddress,
  setPaymentType,
  resetCreateOrderStatus,
};
