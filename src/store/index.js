import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';

//   "redux": "^4.2.0",

// for authentication

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
