import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsId } from '../../api/productsApi';

export const productsThunk = createAsyncThunk(
  'products/get',
  async (body, thunkAPI) => {
    try {
      const products = fetchProducts(body);
      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const productsIdThunk = createAsyncThunk(
  'productId/get',
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const productId = fetchProductsId(id);
      return productId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
