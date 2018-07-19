import {
  SET_USERNAME,
  SET_PASSWORD,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SET_TOKEN,
  SET_LOADING,
  LOG_OUT,
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  password: '',
  token: null,
  tokenExpiredTime: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case LOG_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOG_IN_SUCCESS: {
      const token = action.payload;
      return {
        ...state,
        token,
        tokenExpiredTime: new Date(new Date().getTime() + token.expires_in * 1000),
        loading: false,
      };
    }
    case LOG_IN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case SET_TOKEN: {
      const { token, tokenExpiredTime } = action.payload;
      return {
        ...state,
        token,
        tokenExpiredTime,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        token: null,
        tokenExpiredTime: null,
      };
    }
    default:
      return state;
  }
};
