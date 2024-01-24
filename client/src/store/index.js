import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userReducer, setUser } from './slices/userSlice';
import {
  productReducer,
  setProducts,
  updateProducts,
  deleteProduct,
} from './slices/productSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

setupListeners(store.dispatch);

export default store;
export { setUser, setProducts, updateProducts, deleteProduct };
