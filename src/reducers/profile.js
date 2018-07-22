import {
  PROFILE_SET_FULL_NAME,
  PROFILE_SET_PHONE,
  PROFILE_SET_ADDRESS,
  PROFILE_SET_AVATAR,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  RESET,
} from '../actions/types';

const INITAL_STATE = {
  fullName: '',
  phone: '',
  address: '',
  avatar: '',
  loading: false,
  updateSuccess: null,
};

export default function (state = INITAL_STATE, action) {
  switch (action.type) {
    case PROFILE_SET_FULL_NAME:
      return {
        ...state,
        fullName: action.payload,
      };
    case PROFILE_SET_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case PROFILE_SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case PROFILE_SET_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updateSuccess: true,
        loading: false,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        updateSuccess: false,
        loading: false,
      };
    case RESET:
      return INITAL_STATE;
    default:
      return state;
  }
}
