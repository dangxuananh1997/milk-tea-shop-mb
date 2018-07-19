import {
  ADD_TO_CART,
  EDIT_FROM_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from './types';

const addToCart = productVariant => ({ type: ADD_TO_CART, payload: productVariant });
const editFromCart = (productIdFromCart, editingProduct) => ({ type: EDIT_FROM_CART, payload: { productIdFromCart, editingProduct } });
const removeFromCart = productVariant => ({ type: REMOVE_FROM_CART, payload: productVariant });
const clearCart = () => ({ type: CLEAR_CART, payload: null });

export {
  addToCart,
  editFromCart,
  removeFromCart,
  clearCart,
};
