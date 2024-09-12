import { createSlice } from '@reduxjs/toolkit';
import {
  addOrderItemThunk,
  allOrderItemThunk,
  updOrderItemThunk,
  delOrderItemThunk,
} from './operationsOrdertItem';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';

const initialState = {
  cart: [],
  idOrder: '',
  isLoading: false,
  error: null,
};

const handleFulfilledAdd = (state, { payload }) => {
  state.cart = state.cart.filter(el => el.idProduct !== payload.idProduct);
  state.cart.push(payload);
  // state.idOrder = payload.owner;

  console.log(payload);
  handleFulfilled(state);
};

const handleFulfilledUpd = (state, { payload }) => {
  // state.idOrder = payload.owner;
  state.cart = state.cart.filter(el => el.idProduct !== payload.idProduct);
  state.cart.push(payload);

  console.log(payload);
  handleFulfilled(state);
};

const handleFulfilledAll = (state, { payload }) => {
  state.idOrder = payload.result.owner[0]._id;
  state.cart = payload.result.map(({ _id, idProduct, quantity }) => ({
    _id,
    idProduct,
    quantity,
  }));

  console.log(payload);
  handleFulfilled(state);
};

const handleFulfilledDel = (state, { payload }) => {
  //   state.idOrder = payload.owner;
  state.cart = state.cart.filter(el => el.idProduct !== payload.idProduct);
  console.log(payload);
  handleFulfilled(state);
};

export const orderItemsSlice = createSlice({
  name: 'orderitem',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addOrderItemThunk.pending, handlePending)
      .addCase(addOrderItemThunk.fulfilled, handleFulfilledAdd)
      .addCase(addOrderItemThunk.rejected, handleRejected)

      .addCase(updOrderItemThunk.pending, handlePending)
      .addCase(updOrderItemThunk.fulfilled, handleFulfilledUpd)
      .addCase(updOrderItemThunk.rejected, handleRejected)

      .addCase(allOrderItemThunk.pending, handlePending)
      .addCase(allOrderItemThunk.fulfilled, handleFulfilledAll)
      .addCase(allOrderItemThunk.rejected, handleRejected)

      .addCase(delOrderItemThunk.pending, handlePending)
      .addCase(delOrderItemThunk.fulfilled, handleFulfilledDel)
      .addCase(delOrderItemThunk.rejected, handleRejected);
  },
});

export const orderItemsReducer = orderItemsSlice.reducer;
