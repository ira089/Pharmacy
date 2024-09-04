import { createSlice } from '@reduxjs/toolkit';
import {medStoreThunk, medStoreSixThunk} from './operationsMedStore';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';

const initialState = {
    pharmacies:[],
    pharmaciesSix:[],
    isLoading: false,
    error: null,
    
  };
  const handleFulfilledStore = (state, { payload }) => {
    state.pharmacies = payload;
    handleFulfilled(state);
  };

  const handleFulfilledStoreSix = (state, { payload }) => {
    state.pharmaciesSix = payload;
    handleFulfilled(state);
  };

  export const medStoreSlice = createSlice({
    name: 'pharmacies',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(medStoreThunk.pending, handlePending)
        .addCase(medStoreThunk.fulfilled, handleFulfilledStore)
        .addCase(medStoreThunk.rejected, handleRejected)
        .addCase(medStoreSixThunk.pending, handlePending)
        .addCase(medStoreSixThunk.fulfilled, handleFulfilledStoreSix)
        .addCase(medStoreSixThunk.rejected, handleRejected);
    },
  });
  
  export const pharmaciesReducer = medStoreSlice.reducer;