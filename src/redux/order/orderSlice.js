import { createSlice } from '@reduxjs/toolkit';
import {addOrderThunk} from './operationsOrder';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: '',
    total: '',
    totalQuantity: '',
    status: 'Pending',
    isLoading: false,
    error: null,
};

const handleFulfilledAdd = (state, { payload }) => {
  console.log(payload)
      
      handleFulfilled(state)
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addOrderThunk.pending, handlePending)
      .addCase(addOrderThunk.fulfilled, handleFulfilledAdd)
      .addCase(addOrderThunk.rejected, handleRejected)
  },
})

export const orderReducer = orderSlice.reducer;
