import {
  GET_COUPON_PACKAGE_REQUEST,
  GET_COUPON_PACKAGE_SUCCESS,
  GET_COUPON_PACKAGE_FAILURE,
  SET_CREATE_USER_COUPON_PACKAGE,
  CREATE_USER_COUPON_REQUEST,
  CREATE_USER_COUPON_SUCCESS,
  CREATE_USER_COUPON_FAILURE,
  GET_USER_COUPON_LIST_REQUEST,
  GET_USER_COUPON_LIST_SUCCESS,
  GET_USER_COUPON_LIST_FAILURE,
  GET_USER_COUPON_PACKAGE_SINGLE_REQUEST,
  GET_USER_COUPON_PACKAGE_SINGLE_SUCCESS,
  GET_USER_COUPON_PACKAGE_SINGLE_FAILURE,
  RESET_CREATE_USER_COUPON_PACKAGE,
} from '../actions/types';

const INITIAL_STATE = {
  couponPackageList: [],
  totalCouponPackage: 0,
  userCouponPackageList: [],
  totalUserCouponPackage: 0,
  createUserCoupon: null,
  createUserCouponSuccess: null,
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_COUPON_PACKAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_COUPON_PACKAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        couponPackageList: action.payload.Data,
        totalCouponPackage: action.payload.Total,
      };
    case GET_COUPON_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case SET_CREATE_USER_COUPON_PACKAGE:
      return {
        ...state,
        createUserCoupon: action.payload,
      };
    case CREATE_USER_COUPON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_COUPON_SUCCESS:
      return {
        ...state,
        createUserCouponSuccess: true,
        loading: false,
      };
    case CREATE_USER_COUPON_FAILURE:
      return {
        ...state,
        createUserCouponSuccess: false,
        loading: false,
      };
    case GET_USER_COUPON_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_COUPON_LIST_SUCCESS:
      return {
        ...state,
        userCouponPackageList: action.payload.Data,
        totalUserCouponPackage: action.payload.Total,
        loading: false,
      };
    case GET_USER_COUPON_LIST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case GET_USER_COUPON_PACKAGE_SINGLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_COUPON_PACKAGE_SINGLE_SUCCESS: {
      // const tmpUserCouponPackageList = [...state.userCouponPackageList];
      // const singlePackage

      return {
        ...state,
        loading: false,
      };
    }
    case GET_USER_COUPON_PACKAGE_SINGLE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case RESET_CREATE_USER_COUPON_PACKAGE:
      return {
        ...state,
        createUserCouponSuccess: null,
        createUserCoupon: null,
      };
    default:
      return state;
  }
}
