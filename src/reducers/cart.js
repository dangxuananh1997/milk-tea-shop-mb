import {
  ADD_TO_CART,
  EDIT_FROM_CART,
  REMOVE_FROM_CART,
} from '../actions/types';

const INITIAL_STATE = {
  cartProductList: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      // find existed, if existed -> add quantity
      const tmpCartProductList = [...state.cartProductList];
      const addingProduct = action.payload;
      const existedIndex = tmpCartProductList.findIndex(p => p.Id === addingProduct.Id);
      if (existedIndex !== -1) {
        const existedProduct = tmpCartProductList[existedIndex];
        existedProduct.Quantity += addingProduct.Quantity;
      } else {
        tmpCartProductList.push(addingProduct);
      }
      return {
        ...state,
        cartProductList: [...tmpCartProductList],
      };
    }
    case EDIT_FROM_CART: {
      // find edit product, if change size -> remove then add
      const { productIdFromCart, editingProduct } = action.payload;
      const tmpCartProductList = [...state.cartProductList];
      const index = tmpCartProductList.findIndex(p => p.Id === productIdFromCart);
      tmpCartProductList.splice(index, 1, editingProduct);
      return {
        ...state,
        cartProductList: [...tmpCartProductList],
      };
    }
    case REMOVE_FROM_CART: {
      const tmpCartProductList = [...state.cartProductList];
      const productVariant = action.payload;
      const index = tmpCartProductList.findIndex(p => p.Id === productVariant.Id);
      tmpCartProductList.splice(index, 1);
      return {
        ...state,
        cartProductList: [...tmpCartProductList],
      };
    }
    default:
      return state;
  }
}
