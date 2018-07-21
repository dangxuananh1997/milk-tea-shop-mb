import {
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
} from './types';

const showSnackbar = text => ({ type: SHOW_SNACKBAR, payload: text });
const hideSnackbar = () => ({ type: HIDE_SNACKBAR, payload: null });

export {
  showSnackbar,
  hideSnackbar,
};
