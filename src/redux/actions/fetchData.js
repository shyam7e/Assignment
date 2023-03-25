import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('listData', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const final = await res.json();
  return final;
});
