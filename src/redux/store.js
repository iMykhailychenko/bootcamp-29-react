import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter/reducer.counter';
import { initialState } from './initial-state';
import { postsReducer } from './posts/slice.posts';
import { userReducer } from './users/slice.users';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    posts: postsReducer,
  },
  devTools: true,
  preloadedState: initialState,
});
