import { createSlice } from '@reduxjs/toolkit';
import {reviewThunk} from './operationsReview';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';

const initialState = {
    reviews:[],
    isLoading: false,
    error: null,
    
  };
  const handleFulfilledReviews = (state, { payload }) => {
    state.reviews = payload;
    handleFulfilled(state);
  };

 

  export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(reviewThunk.pending, handlePending)
        .addCase(reviewThunk.fulfilled, handleFulfilledReviews)
        .addCase(reviewThunk.rejected, handleRejected);
    },
  });
  
  export const reviewsReducer = reviewsSlice.reducer;