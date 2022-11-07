import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPostsService } from 'services/posts.service';

//   dispatch({ type: 'posts/getPosts/penging' });
//   try {
//     const posts = await getPostsService();
//     dispatch({ type: 'posts/getPosts/fullfiled', payload: posts })
//   } catch (e) {
//     dispatch({ type: 'posts/getPosts/rejected' })
//   }

export const getPostsOperation = createAsyncThunk('posts/getPosts', (params, args) => {
  console.log('params', params);
  console.log('args', args);

  return getPostsService(params);
});
