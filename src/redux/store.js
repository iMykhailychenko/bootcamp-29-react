import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter/reducer.counter';
import { initialState } from './initial-state';
import { postsReducer } from './posts/slice.posts';
import { postsApi } from './rtk-posts/api.rtk-posts';
import { userReducer } from './users/slice.users';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  devTools: true,
  preloadedState: initialState,
  middleware: callback => callback().concat(postsApi.middleware) /* -> [f,f,f, custom] */,
});
