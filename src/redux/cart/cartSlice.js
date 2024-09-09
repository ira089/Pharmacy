import { createSlice } from '@reduxjs/toolkit';

const cartClice = createSlice({
  name: 'cart',
  initialState: {
    productsUser: [],
    isLoading: false,
    error: null,
  },
  // productsUser: {
  //     idProduct: '',
  //     quantity: '',

  reducers: {
    addProduct: (state, { payload }) => {
        console.log(payload)
      state.productsUser = state.productsUser.filter(
        el => el.idProduct !== payload.idProduct
      );
      state.productsUser.push(payload);
    },
    // removeProduct: (state, { payload }) => {
    //   state.productsUser = state.productsUser.filter(
    //     el => el._id !== payload._id
    //   );
    //   state.products.push(payload);
    // },
  },
});

export const { addProduct } = cartClice.actions;
export default cartClice.reducer;
