import { createAsyncThunk } from '@reduxjs/toolkit';
import * as orderItemsApi from '../../api/orderItemsApi';
import { toast } from 'react-toastify';

export const addOrderItemThunk = createAsyncThunk(
    'orderitem/add',
    async (data, thunkAPI) => {
      try {
        const orderItem = await orderItemsApi.fetchOrderItemAdd(data);
        console.log(orderItem)
        return orderItem;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const allOrderItemThunk = createAsyncThunk(
    'orderitem/get',
    async (_, thunkAPI) => {
      try {
        const orderItem = await orderItemsApi.fetchOrdertItemAll();
        console.log(orderItem)
        return orderItem;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const updOrderItemThunk = createAsyncThunk(
    'orderitem/upd',
    async (data, thunkAPI) => {
      try {
        const id = data.id;
        const orderItem = await orderItemsApi.fetchOrdertItemUpd(id, data);
        console.log(orderItem)
        return orderItem;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const delOrderItemThunk = createAsyncThunk(
    'orderitem/del',
    async (id, thunkAPI) => {
      try {
        const orderItem = await orderItemsApi.fetchOrdertItemDel(id);
        console.log(orderItem)
        toast.success('Product removed!');
        return orderItem;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );