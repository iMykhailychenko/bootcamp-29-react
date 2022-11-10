import { createSlice } from '@reduxjs/toolkit';

import { Status } from 'constants/fetch-status';

import { profileInitialState } from './intial-state.profile';
import { getProfileOperation } from './operation.profile';

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  extraReducers: {
    [getProfileOperation.pending]: state => {
      state.status = Status.Loading;
    },
    [getProfileOperation.fulfilled]: (state, action) => {
      state.status = Status.Success;
      state.data = action.payload;
    },
    [getProfileOperation.rejected]: state => {
      state.status = Status.Error;
    },
  },
});

export const profileReducer = profileSlice.reducer;
