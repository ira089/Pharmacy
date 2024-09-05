import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';
import { productsThunk } from './operationsProducts';

const initialState = {
    products:[],
    page:1,
    totalPages:0,
    isLoading: false,
    error: null,
  };

  const handleFulfilledProducts = (state, { payload }) => {
    state.products = payload.result;
    state.page = payload.page;
    state.totalPages = payload.total;
    handleFulfilled(state);
  };

  export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(productsThunk.pending, handlePending)
        .addCase(productsThunk.fulfilled, handleFulfilledProducts)
        .addCase(productsThunk.rejected, handleRejected);
    },
  });
  
  export const productsReducer = productsSlice.reducer;
