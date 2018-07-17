import {
  INCREASE_CART_BADGE_COUNT,
  DECREASE_CART_BADGE_COUNT,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  badgeCount: 0,
  getProductLoading: false,
  productList: [],
  totalProduct: 0,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREASE_CART_BADGE_COUNT:
      return {
        ...state,
        badgeCount: state.badgeCount + action.payload,
      };
    case DECREASE_CART_BADGE_COUNT:
      return {
        ...state,
        badgeCount: state.badgeCount - action.payload,
      };
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        getProductLoading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productList: action.payload.Data,
        totalProduct: action.payload.Total,
        getProductLoading: false,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        getProductLoading: false,
      };
    default:
      return state;
  }
}
