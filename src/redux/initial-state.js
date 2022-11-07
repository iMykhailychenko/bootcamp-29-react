import { counterInitialState } from './counter/initial-state.counter';
import { postsInitialState } from './posts/initial-state.posts';
import { usersInitialState } from './users/initial-state.users';

export const initialState = {
  counter: counterInitialState,
  users: usersInitialState,
  posts: postsInitialState,
};
