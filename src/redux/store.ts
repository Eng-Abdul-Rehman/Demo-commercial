import { configureStore } from '@reduxjs/toolkit';
import defaultSlice from './sclice';

const store = configureStore({
  reducer: {
    defaultSlice: defaultSlice,
  },
});

export default store;
