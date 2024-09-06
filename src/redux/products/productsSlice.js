import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';
import { productsThunk, productsIdThunk } from './operationsProducts';

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

  const handleFulfilledProductsId = (state, { payload }) => {
    state.products = state.products.filter(el => el._id !== payload._id);
    state.products.push(payload);
    handleFulfilled(state);
  }

  export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(productsThunk.pending, handlePending)
        .addCase(productsThunk.fulfilled, handleFulfilledProducts)
        .addCase(productsThunk.rejected, handleRejected)
        .addCase(productsIdThunk.pending, handlePending)
        .addCase(productsIdThunk.fulfilled, handleFulfilledProductsId)
        .addCase(productsIdThunk.rejected, handleRejected);
    },
  });
  
  export const productsReducer = productsSlice.reducer;
