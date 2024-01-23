import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    _id: '',
    username: '',
    email: '',
    orderHistory: [],
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
