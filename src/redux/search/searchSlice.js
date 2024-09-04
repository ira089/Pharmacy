import { createSlice } from '@reduxjs/toolkit';

const searchClice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    page: 1,
    category: '',
    
  },
  reducers: {
    addQuery: (state, { payload }) => {
      state.query = payload;
      state.page = 1;
    },
    addPage: (state, { payload }) => {
      state.page = payload;
    },
    addCategory: (state, { payload }) => {
      state.category = payload;
      state.page = 1;
    },
  },
});

export const {
  addQuery,
  addPage,
  addCategory,
} = searchClice.actions;
export default searchClice.reducer;
