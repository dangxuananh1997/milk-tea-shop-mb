import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './types';

const addToCart = productVariant => ({ type: ADD_TO_CART, payload: productVariant });
const removeFromCart = productVariant => ({ type: REMOVE_FROM_CART, payload: productVariant });

export {
  addToCart,
  removeFromCart,
};
