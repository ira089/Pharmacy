import { createSlice } from '@reduxjs/toolkit';
import {medStoreThunk} from './operationsMedStore';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';

const initialState = {
    pharmacies:[],
    isLoading: false,
    error: null,
    
  };
  const handleFulfilledStore = (state, { payload }) => {
    state.pharmacies = payload;
    handleFulfilled(state);
  };

  export const medStoreSlice = createSlice({
    name: 'pharmacies',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(medStoreThunk.pending, handlePending)
        .addCase(medStoreThunk.fulfilled, handleFulfilledStore)
        .addCase(medStoreThunk.rejected, handleRejected);
    },
  });
  
  export const pharmaciesReducer = medStoreSlice.reducer;