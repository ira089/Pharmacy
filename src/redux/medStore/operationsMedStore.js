import { createAsyncThunk } from '@reduxjs/toolkit';
import * as medStoreApi from '../../api/medStoreApi';

export const medStoreThunk = createAsyncThunk(
  'store/all',
  async (_, thunkAPI) => {
    try {
      const pharmacies = await medStoreApi.fetchMedStore();

      return pharmacies;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const medStoreSixThunk = createAsyncThunk(
  'store/six',
  async (_, thunkAPI) => {
    try {
      const pharmaciesSix = await medStoreApi.fetchMedStoreSix();

      return pharmaciesSix;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
