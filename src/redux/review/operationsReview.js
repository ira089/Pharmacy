import { createAsyncThunk } from '@reduxjs/toolkit';
import * as reviewApi from '../../api/reviewApi';

export const reviewThunk = createAsyncThunk(
  'review/all',
  async (_, thunkAPI) => {
    try {
      const reviews = await reviewApi.fetchReview();
      return reviews;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);