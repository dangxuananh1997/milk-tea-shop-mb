import {
  GET_ORDER_LIST_REQUEST,
  GET_ORDER_LIST_SUCCESS,
  GET_ORDER_LIST_FAILURE,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  orderList: [],
  totalOrder: 0,
  orderDetails: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDER_LIST_SUCCESS:
      return {
        ...state,
        orderList: action.payload.Data,
        totalOrder: action.payload.Total,
        loading: false,
      };
    case GET_ORDER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case GET_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orderDetails: action.payload,
        loading: false,
      };
    case GET_ORDER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
