import { createAsyncThunk } from '@reduxjs/toolkit';
import * as orderApi from '../../api/orderApi';
import { toast } from 'react-toastify';

export const addOrderThunk = createAsyncThunk(
    'order/add',
    async (data, thunkAPI) => {
      try {
        const order = await orderApi.fetchOrderAdd(data);
        console.log(order)
        return order;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const updOrderThunk = createAsyncThunk(
    'order/upd',
    async (data, thunkAPI) => {
      try {
        const id = data.id
        const order = await orderApi.fetchOrderAdd(id, data);
        console.log(order)
        return order;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );