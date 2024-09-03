import { createAsyncThunk } from '@reduxjs/toolkit';
import * as medStoreApi from '../../api/medStoreApi';


export const medStoreThunk = createAsyncThunk(
  'store/all',
  async (_, thunkAPI) => {
    try {
      const pharmacies = await medStoreApi.fetchMedStore();
      console.log(pharmacies)
      return pharmacies;
    } catch (error) {
     
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);