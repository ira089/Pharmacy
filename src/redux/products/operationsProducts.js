import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/productsApi';

export const productsThunk = createAsyncThunk(
  'products/get',
  async (body, thunkAPI) => {
    try {
      const products= fetchProducts(body);
      console.log(products)
      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);