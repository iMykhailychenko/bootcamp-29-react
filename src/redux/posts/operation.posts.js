import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPostsService } from 'services/posts.service';

export const getPostsOperation = createAsyncThunk('posts/getPosts', (params) => {
  return getPostsService(params);
});
