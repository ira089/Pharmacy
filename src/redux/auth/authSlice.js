import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  logOutThunk,
  refresThunk,
  currentFullThunk,
  orderUpdThunk,
} from './operationsAuth';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';

const initialState = {
  user: { name: null, email: null, phone: '' },
  orders: [],
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handleFulfilledRegister = (state, { payload }) => {
  state.user.name = payload.user.name;
  state.user.email = payload.user.email;
  state.user.phone = payload.user.phone;
  state.isLoggedIn = true;
  handleFulfilled(state);
};

const handleFulfilledLogin = (state, { payload }) => {
  state.token = payload.token;
  state.user.name = payload.name;
  state.user.email = payload.email;
  state.user.phone = payload.phone;
  state.isLoggedIn = true;
  handleFulfilled(state);
};

const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null, phone: '' };
  state.token = null;
  state.isLoggedIn = false;
  handleFulfilled(state);
};

const handleFulfilledRefrech = (state, { payload }) => {
  state.user.name = payload.name;
  state.user.email = payload.email;
  state.user.phone = payload.phone;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  handleFulfilled(state);
};
const handleFulfilledCurrentFull = (state, { payload }) => {
  state.user.name = payload.name;
  state.user.email = payload.email;
  state.user.phone = payload.phone;
  state.orders = payload.orders;
  state.isLoggedIn = true;
  handleFulfilled(state);
};
const handleFulfilledUpdOrder = (state, { payload }) => {
  state.orders = state.orders.filter(el => el.id !== payload.id);
  state.orders.push(payload);
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, handleFulfilledRegister)
      .addCase(registerThunk.rejected, handleRejected)
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilledLogin)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(logOutThunk.pending, handlePending)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogOut)
      .addCase(logOutThunk.rejected, handleRejected)
      .addCase(refresThunk.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refresThunk.fulfilled, handleFulfilledRefrech)
      .addCase(refresThunk.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(currentFullThunk.pending, handlePending)
      .addCase(currentFullThunk.fulfilled, handleFulfilledCurrentFull)
      .addCase(currentFullThunk.rejected, handleRejected)

      .addCase(orderUpdThunk.pending, handlePending)
      .addCase(orderUpdThunk.fulfilled, handleFulfilledUpdOrder)
      .addCase(orderUpdThunk.rejected, handleRejected);
  },
});
export const authReducer = authSlice.reducer;
