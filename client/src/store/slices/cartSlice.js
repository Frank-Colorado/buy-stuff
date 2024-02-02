import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart: (_state, { payload }) => {
      // Set the cart to the payload
      return payload;
    },
    addItem: (state, { payload }) => {
      // Add the new item to the end of the array
      state.push(payload);
    },
    removeItem: (state, { payload }) => {
      // Remove the item from state
      return state.filter((item) => item.cartId !== payload);
    },
    incrementItem: (state, { payload }) => {
      // Find the item in state
      const item = state.find((item) => item.cartId === payload);
      // Increment the quantity
      item.quantity++;
    },
    decrementItem: (state, { payload }) => {
      // Find the item in state
      const item = state.find((item) => item.cartId === payload);
      // Decrement the quantity
      item.quantity--;
    },
    clearCart: (_state, _action) => {
      // Reset the cart to an empty array
      return [];
    },
  },
});

export const {
  setCart,
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
  clearCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
