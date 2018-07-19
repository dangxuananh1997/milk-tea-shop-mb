import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  SET_CUSTOMER_NAME,
  SET_CONTACT_PHONE,
  SET_DELIVERY_ADDRESS,
  RESET_CREATE_ORDER_STATUS,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  customerName: '',
  contactPhone: '',
  deliveryAddress: '',
  paymentType: 1,
  success: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
      };
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };
    case SET_CUSTOMER_NAME:
      return {
        ...state,
        customerName: action.payload,
      };
    case SET_CONTACT_PHONE:
      return {
        ...state,
        contactPhone: action.payload,
      };
    case SET_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: action.payload,
      };
    case RESET_CREATE_ORDER_STATUS:
      return {
        ...state,
        success: null,
      };
    default:
      return state;
  }
}
