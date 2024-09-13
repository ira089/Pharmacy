import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../api/authApi';

import { toast } from 'react-toastify';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const register = await authApi.fetchRegister(data);
      toast.success('Congratulations! You have successfully registered!');
      return register;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const login = await authApi.fetchLogin(data);
      return login;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const logOut = await authApi.fetchLogOut();
      toast.success('Signout success');
      return logOut;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refresThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      const refresh = await authApi.fetchRefresh(persistedToken);
      return refresh;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentFullThunk = createAsyncThunk(
  'auth/full',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      const currentFull = await authApi.fetchCurrentFull(persistedToken);
      return currentFull;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const orderUpdThunk = createAsyncThunk(
  'auth/orderupd',
  async (data, thunkAPI) => {
    try {
      const id = data.id;
      const dataChange = { ...data };
      delete dataChange.id;
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      const updOrder = await authApi.fetchUpdOrder(
        persistedToken,
        id,
        dataChange
      );
      console.log(updOrder);
      return updOrder;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
