import { createAsyncThunk } from '@reduxjs/toolkit';
import * as cartApi from '../../api/cartApi';
import { toast } from 'react-toastify';

export const addProduct = createAsyncThunk(
    'cart/add',
    async (data, thunkAPI) => {
      try {
        const cartUserAdd = await cartApi.fetchCartAdd(data);
        console.log(cartUserAdd)
        return cartUserAdd;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const cartUpdThunk = createAsyncThunk(
    'cart/upd',
    async (data, thunkAPI) => {
      try {
        const cartUserUpd = await cartApi.fetchCartUpd(data);
        console.log(cartUserUpd)
        return cartUserUpd;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const cartGetThunk = createAsyncThunk(
    'cart/get',
    async (_, thunkAPI) => {
      try {
        const cartUser = await cartApi.fetchCartGet();
        console.log(cartUser)
        return cartUser;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );