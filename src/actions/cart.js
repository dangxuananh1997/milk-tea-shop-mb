import {
  ADD_TO_CART,
  EDIT_FROM_CART,
  REMOVE_FROM_CART,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
} from './types';

import { callAPI, apiPaths } from '../services';

const addToCart = productVariant => ({ type: ADD_TO_CART, payload: productVariant });
const editFromCart = (productIdFromCart, editingProduct) => ({ type: EDIT_FROM_CART, payload: { productIdFromCart, editingProduct } });
const removeFromCart = productVariant => ({ type: REMOVE_FROM_CART, payload: productVariant });

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

export {
  addToCart,
  editFromCart,
  removeFromCart,
};
