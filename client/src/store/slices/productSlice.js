import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    setProducts: (_state, { payload }) => {
      // Replace the current state with the new array of products
      return payload;
    },
    addProduct: (state, { payload }) => {
      // Add the new product to the end of the array
      state.push(payload);
    },
    updateProducts: (state, { payload }) => {
      // Find the product in state and update it
      const index = state.findIndex((product) => product._id === payload._id);
      // Replace the product in state with the updated product
      state[index] = payload;
    },
    deleteProduct: (state, { payload }) => {
      // Remove the product from state
      return state.filter((product) => product._id !== payload);
    },
  },
});

export const { setProducts, addProduct, updateProducts, deleteProduct } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
