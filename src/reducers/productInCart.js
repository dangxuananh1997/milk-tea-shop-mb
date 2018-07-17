import {
  SELECT_PRODUCT_VARIANT,
  GET_PRODUCT_VARIANTS_REQUEST,
  GET_PRODUCT_VARIANTS_SUCCESS,
  GET_PRODUCT_VARIANTS_FAILURE,
  SET_PRODUCT_IN_CART_QUANTITY,
  RESET_PRODUCT_IN_CART,
} from '../actions/types';

const INITIAL_STATE = {
  selectedVariant: null,
  variantList: [],
  loading: false,
  quantity: 1,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_PRODUCT_VARIANT:
      return {
        ...state,
        selectedVariant: action.payload,
      };
    case GET_PRODUCT_VARIANTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_VARIANTS_SUCCESS:
      return {
        ...state,
        variantList: action.payload,
        loading: false,
      };
    case GET_PRODUCT_VARIANTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case SET_PRODUCT_IN_CART_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };
    case RESET_PRODUCT_IN_CART:
      return INITIAL_STATE;
    default:
      return state;
  }
}
