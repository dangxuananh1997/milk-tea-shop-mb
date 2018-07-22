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
} from './types';

import { apiPaths, callAPI } from '../services';

const getCouponPackageRequest = () => ({ type: GET_COUPON_PACKAGE_REQUEST, payload: null });
const getCouponPackageSuccess = response => ({ type: GET_COUPON_PACKAGE_SUCCESS, payload: response });
const getCouponPackageFailure = error => ({ type: GET_COUPON_PACKAGE_FAILURE, payload: error });

export function getCouponPackage() {
  return (dispatch) => {
    dispatch(getCouponPackageRequest());
    callAPI('GET', apiPaths.getCouponPackage, null, { pageIndex: 1, searchValue: '' },
      (response) => {
        dispatch(getCouponPackageSuccess(response));
      },
      (error) => {
        dispatch(getCouponPackageFailure(error));
      });
  };
}

const setCreateUserCouponPackage = couponPackage => ({ type: SET_CREATE_USER_COUPON_PACKAGE, payload: couponPackage });
const createUserCouponPackageRequest = () => ({ type: CREATE_USER_COUPON_REQUEST, payload: null });
const createUserCouponPackageSuccess = response => ({ type: CREATE_USER_COUPON_SUCCESS, payload: response });
const createUserCouponPackageFailure = error => ({ type: CREATE_USER_COUPON_FAILURE, payload: error });

export function createUserCouponPackage(couponPackageId) {
  return (dispatch) => {
    dispatch(createUserCouponPackageRequest());
    callAPI('POST', apiPaths.createUserCouponPackage,
      {
        CouponPackageId: couponPackageId,
      },
      null,
      (response) => {
        dispatch(createUserCouponPackageSuccess(response));
      },
      (error) => {
        dispatch(createUserCouponPackageFailure(error));
      });
  };
}

const getUserCouponListRequest = () => ({ type: GET_USER_COUPON_LIST_REQUEST, payload: null });
const getUserCouponListSuccess = response => ({ type: GET_USER_COUPON_LIST_SUCCESS, payload: response });
const getUserCouponListFailure = error => ({ type: GET_USER_COUPON_LIST_FAILURE, payload: error });

export function getUserCouponList() {
  return (dispatch) => {
    dispatch(getUserCouponListRequest());
    callAPI('GET', apiPaths.getUserCouponPackage, null, null,
      (response) => {
        dispatch(getUserCouponListSuccess(response));
      },
      (error) => {
        dispatch(getUserCouponListFailure(error));
      });
  };
}

const getUserCouponPackageSingleRequest = () => ({ type: GET_USER_COUPON_PACKAGE_SINGLE_REQUEST, payload: null });
const getUserCouponPackageSingleSuccess = singlePackage => ({ type: GET_USER_COUPON_PACKAGE_SINGLE_SUCCESS, payload: singlePackage });
const getUserCouponPackageSingleError = error => ({ type: GET_USER_COUPON_PACKAGE_SINGLE_FAILURE, payload: error });

export function getUserCouponPackageSingle(packageId) {
  return (dispatch) => {
    dispatch(getUserCouponPackageSingleRequest());
    callAPI('GET', apiPaths.getUserCouponPackageSingle, null, { id: packageId },
      (singlePackage) => {
        dispatch(getUserCouponPackageSingleSuccess(singlePackage));
      },
      (error) => {
        dispatch(getUserCouponPackageSingleError(error));
      });
  };
}

const resetCreateUserCouponPackage = () => ({ type: RESET_CREATE_USER_COUPON_PACKAGE, payload: null });

export {
  setCreateUserCouponPackage,
  resetCreateUserCouponPackage,
};
