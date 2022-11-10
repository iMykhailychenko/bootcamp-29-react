import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { authReducer } from './auth/slice.auth';
import { counterReducer } from './counter/reducer.counter';
import { initialState } from './initial-state';
import { postsReducer } from './posts/slice.posts';
import { profileReducer } from './profile/slice.profile';
import { postsApi } from './rtk-posts/api.rtk-posts';
import { usersReducer } from './users/slice.users';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    posts: postsReducer,
    auth: authReducer,
    profile: profileReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  devTools: true,
  preloadedState: initialState,
  middleware: callback =>
    callback({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(postsApi.middleware),
});

export const persistor = persistStore(store);
