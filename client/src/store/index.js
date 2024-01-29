import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userReducer, setUser } from './slices/userSlice';
import {
  productReducer,
  setProducts,
  addProduct,
  updateProducts,
  deleteProduct,
} from './slices/productSlice';
import {
  cartReducer,
  addItem,
  removeItem,
  clearCart,
} from './slices/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

setupListeners(store.dispatch);

export default store;
export {
  setUser,
  setProducts,
  addProduct,
  updateProducts,
  deleteProduct,
  addItem,
  removeItem,
  clearCart,
};
