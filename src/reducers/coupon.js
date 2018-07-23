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
  RESET_CREATE_USER_COUPON_PACKAGE,
} from '../actions/types';

import { getCurrentDate } from '../tools/dateConverter';

const INITIAL_STATE = {
  couponPackageList: [],
  totalUserCoupon: 0,
  userCouponPackageList: null,
  availableCoupons: [],
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
    case GET_USER_COUPON_LIST_SUCCESS: {
      const couponItems = {};
      const couponPackages = [...action.payload.Data];
      couponPackages.forEach((pack) => {
        pack.CouponItems.forEach((couponItem) => {
          const coupon = {
            Id: couponItem.Id,
            DateExpired: couponItem.DateExpired.substring(0, 10),
            IsUsed: couponItem.IsUsed,
            DrinkQuantity: pack.DrinkQuantity,
            IsExpired: new Date(couponItem.DateExpired.substring(0, 10)) < new Date(getCurrentDate()),
          };
          const tmpItem = couponItems[couponItem.DateExpired.substring(0, 10)];
          if (tmpItem !== undefined) {
            tmpItem.push(coupon);
          } else {
            couponItems[couponItem.DateExpired.substring(0, 10)] = [coupon];
          }
        });
      });
      let available = couponItems[getCurrentDate()] ? couponItems[getCurrentDate()] : [];
      available = available.filter(c => !c.IsUsed);
      return {
        ...state,
        userCouponPackageList: { ...couponItems },
        availableCoupons: [...available],
        totalUserCoupon: available.length,
        loading: false,
      };
    }
    case GET_USER_COUPON_LIST_FAILURE:
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
