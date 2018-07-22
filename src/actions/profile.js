import {
  PROFILE_SET_FULL_NAME,
  PROFILE_SET_PHONE,
  PROFILE_SET_ADDRESS,
  PROFILE_SET_AVATAR,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  RESET,
} from './types';

import { callAPI, apiPaths } from '../services';

const setFullName = name => ({ type: PROFILE_SET_FULL_NAME, payload: name });
const setPhone = phone => ({ type: PROFILE_SET_PHONE, payload: phone });
const setAddress = address => ({ type: PROFILE_SET_ADDRESS, payload: address });
const setAvatar = avatar => ({ type: PROFILE_SET_AVATAR, payload: avatar });
const reset = () => ({ type: RESET, payload: null });

const updateProfileRequest = () => ({ type: UPDATE_PROFILE_REQUEST, payload: null });
const updateProfileSuccess = response => ({ type: UPDATE_PROFILE_SUCCESS, payload: response });
const updateProfileFailure = error => ({ type: UPDATE_PROFILE_FAILURE, payload: error });

export function updateProfile(fullName, phone, address, avatar) {
  return (dispatch) => {
    dispatch(updateProfileRequest());
    callAPI('PUT', apiPaths.updateProfile,
      {
        FullName: fullName,
        Phone: phone,
        Address: address,
        Avatar: avatar,
      },
      null,
      (response) => {
        dispatch(updateProfileSuccess(response));
      },
      (error) => {
        dispatch(updateProfileFailure(error));
      });
  };
}

export {
  setFullName,
  setPhone,
  setAddress,
  setAvatar,
  reset,
};
