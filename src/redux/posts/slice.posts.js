import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'config';

import { postsInitialState } from './initial-state.posts';
import { getPostsOperation } from './operation.posts';

console.log(getPostsOperation.pending.toString());
console.log(getPostsOperation.fulfilled.toString());
console.log(getPostsOperation.rejected.toString());

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  extraReducers: {
    [getPostsOperation.pending]: state => {
      state.status = Status.LOADING;
    },
    [getPostsOperation.fulfilled]: (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    },
    [getPostsOperation.rejected]: state => {
      state.status = Status.ERROR;
    },
  },
});

export const postsReducer = postsSlice.reducer;
