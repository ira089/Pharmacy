import { createSlice } from '@reduxjs/toolkit';
import {addOrderThunk, updOrderThunk} from './operationsOrder';
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
    total: '0',
    totalQuantity: '0',
    status: 'Pending',
    isLoading: false,
    error: null,
    id: '',
};

const handleFulfilledAdd = (state, { payload }) => {
    state.id = payload._id;
    state.total = payload.total;
    state.totalQuantity = payload.totalQuantity;
  console.log(payload)
      handleFulfilled(state)
};

const handleFulfilledUpd = (state, { payload }) => {
  state.id = payload._id;
  state.total = payload.total;
  state.totalQuantity = payload.totalQuantity;
  state.name = payload.name;
  state.email = payload.email;
  state.phone = payload.phone;
  state.address = payload.address;
  state.paymentMethod = payload.paymentMethod;
  state.status = payload.status;
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
      .addCase(updOrderThunk.pending, handlePending)
      .addCase(updOrderThunk.fulfilled, handleFulfilledUpd)
      .addCase(updOrderThunk.rejected, handleRejected);
  },
})

export const orderReducer = orderSlice.reducer;
