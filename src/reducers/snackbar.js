import {
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
} from '../actions/types';

const INITIAL_STATE = {
  text: '',
  visible: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        text: action.payload,
        visible: true,
      };
    case HIDE_SNACKBAR:
      return INITIAL_STATE;
    default:
      return state;
  }
}
