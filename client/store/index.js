import { configureStore } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';
import navBarSlice from './slices/navBarSlice';

const store = configureStore({
  reducer: {navBar: navBarSlice},
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(createLogger()),
});

export default store;
