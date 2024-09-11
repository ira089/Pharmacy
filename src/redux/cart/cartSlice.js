import { createSlice } from '@reduxjs/toolkit';
import {addProduct} from './operationsCart';
import {
  // handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';

const initialState = {
  productsUser: [],
  total: '',
  totalQuantity: '',
    isLoading: false,
    error: null,
};
// убрать тотфд и кол-во
const handleFulfilledAdd = (state, { payload }) => {
  console.log(payload)
      state.productsUser = state.productsUser.filter(
         el => el.idProduct !== payload.idProduct
      );
      state.productsUser.push(payload);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addProduct.pending, handlePending)
      .addCase(addProduct.fulfilled, handleFulfilledAdd)
      .addCase(addProduct.rejected, handleRejected)
  },
})

//   reducers: {
//     addProduct: (state, { payload }) => {
//       console.log(payload)
//       state.productsUser = state.productsUser.filter(
//         el => el.idProduct !== payload.idProduct
//       );
//       state.productsUser.push(payload);
//     },
//     removeProduct: (state, { payload }) => {
//       console.log(payload)
//       state.productsUser = state.productsUser.filter(
//         el => el.idProduct !== payload
//       );
      
//     },
//   },
// });

export const cartReducer = cartSlice.reducer;
