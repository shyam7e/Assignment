import {fetchData} from '../actions/fetchData';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const ListSlice = createSlice({
  name: 'dataList',
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
    filteredData: [],
    filterValue: '',
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    setFilterValue(state, action) {
      state.filterValue = action.payload;
      state.filteredData = state.data.filter(item =>
        item.name.toLowerCase().includes(state.filterValue.toLowerCase()),
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
      state.filteredData = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default ListSlice.reducer;
export const {setData, setFilterValue} = ListSlice.actions;
