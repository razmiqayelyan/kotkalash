import { configureStore } from '@reduxjs/toolkit';
import  CatSlice  from '../features/Cat/CatSlice';

export const store = configureStore({
  reducer: {
    cat: CatSlice,
  },
});
