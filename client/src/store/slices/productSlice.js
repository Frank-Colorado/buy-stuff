import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    setProducts: (_state, { payload }) => {
      // Replace the current state with the new array of products
      return payload;
    },
    updateProducts: (state, { payload }) => {
      // Find the index of the product that needs to be udpated
      const index = state.findIndex((product) => product._id === payload._id);
      // Update the product in state
      state[index] = payload;
    },
    deleteProduct: (state, { payload }) => {
      // Remove the product from state
      return state.filter((product) => product._id !== payload);
    },
  },
});

export const { setProducts, updateProducts, deleteProduct } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
