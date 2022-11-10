import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getProfileOperation } from 'redux/profile/operation.profile';

import { Status } from 'constants/fetch-status';

import { authInitialState } from './initial-state.auth';
import { loginOperation } from './operations.auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logOutAction: () => authInitialState,
  },
  extraReducers: {
    [loginOperation.pending]: state => {
      state.status = Status.Loading;
    },
    [loginOperation.fulfilled]: (state, { payload }) => {
      state.status = Status.Success;

      state.access_token = payload.access_token;
      state.token_type = payload.token_type;
    },
    [loginOperation.rejected]: state => {
      state.status = Status.Error;
    },

    [getProfileOperation.fulfilled]: state => {
      state.status = Status.Success;
    },
    [getProfileOperation.rejected]: () => authInitialState,
  },
});

const persistConfig = {
  key: 'bootcamp-29',
  storage,
  blacklist: ['status'],
};

export const { logOutAction } = authSlice.actions;

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
