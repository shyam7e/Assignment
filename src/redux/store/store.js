import {configureStore} from '@reduxjs/toolkit';
import ListSlice from '../slices/ListSlice';
export const store = configureStore({
  reducer: {
    dataList: ListSlice,
  },
});
