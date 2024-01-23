import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userReducer, setUser } from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

setupListeners(store.dispatch);

export { setUser };
