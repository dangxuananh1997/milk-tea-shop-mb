import {
  SELECT_PRODUCT_VARIANT,
  GET_PRODUCT_VARIANTS_SUCCESS,
  GET_PRODUCT_VARIANTS_REQUEST,
  GET_PRODUCT_VARIANTS_FAILURE,
  SET_PRODUCT_IN_CART_QUANTITY,
  CHANGE_ADD_TO_UPDATE,
  RESET_PRODUCT_IN_CART,
} from './types';

import { callAPI, apiPaths } from '../services';

const selectProductVariant = variant => ({ type: SELECT_PRODUCT_VARIANT, payload: variant });

const getProductVariantsRequest = () => ({ type: GET_PRODUCT_VARIANTS_REQUEST, payload: null });
const getProductVariantsSuccess = data => ({ type: GET_PRODUCT_VARIANTS_SUCCESS, payload: data });
const getProductVariantsFailure = error => ({ type: GET_PRODUCT_VARIANTS_FAILURE, payload: error });

export function getProductVariants(productId) {
  return (dispatch) => {
    dispatch(getProductVariantsRequest());
    try {
      callAPI('GET', apiPaths.getProductVariants, null, { productId },
        (response) => {
          dispatch(getProductVariantsSuccess(response.data));
        },
        (error) => {
          dispatch(getProductVariantsFailure(error));
        });
    } catch (error) {
      dispatch(getProductVariantsFailure(error));
    }
  };
}

const setProductInCartQuantity = quantity => ({ type: SET_PRODUCT_IN_CART_QUANTITY, payload: quantity });
const resetProductInCart = () => ({ type: RESET_PRODUCT_IN_CART, payload: null });
const changeAddToUpdate = bool => ({ type: CHANGE_ADD_TO_UPDATE, payload: bool });

export {
  selectProductVariant,
  getProductVariantsRequest,
  getProductVariantsSuccess,
  getProductVariantsFailure,
  setProductInCartQuantity,
  resetProductInCart,
  changeAddToUpdate,
};
