import { createSlice } from '@reduxjs/toolkit';

import { Status } from 'constants/fetch-status';

import { postsInitialState } from './initial-state.posts';
import { getPostsOperation } from './operation.posts';

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  extraReducers: {
    [getPostsOperation.pending]: state => {
      state.status = Status.Loading;
    },
    [getPostsOperation.fulfilled]: (state, action) => {
      state.status = Status.Success;
      state.data = action.payload;
    },
    [getPostsOperation.rejected]: state => {
      state.status = Status.Error;
    },
  },
});

export const postsReducer = postsSlice.reducer;
