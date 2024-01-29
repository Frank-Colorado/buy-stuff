import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, { payload }) => {
      // Add the new item to the end of the array
      state.push(payload);
    },
    removeItem: (state, { payload }) => {
      // Remove the item from state
      return state.filter((item) => item.cartId !== payload);
    },
    clearCart: (_state, _action) => {
      // Reset the cart to an empty array
      return [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
