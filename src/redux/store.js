import { configureStore, createSlice } from '@reduxjs/toolkit';
import usersJson from 'assets/users.json';

import { counterInitialState } from './counter/initial-state.counter';
import { counterReducer } from './counter/reducer.counter';

// З використанням функцій createAction і createReducer
// -----------------------------------
// /* const createAction = (type) => {
//   const actionCreator = (payload) => {
//     return { type, payload }
//   }

//   actionCreator.toString = () => type

//   return actionCreator
// } */
// const usersInitialState = {
//   search: '',
//   usersList: usersJson,
// };

// export const userSearchAction = createAction('USERS_SEARCH');
// export const userDeleteAction = createAction('USERS_DELETE');

// const userSearchReducer = createReducer(usersInitialState.search, {
//   [userSearchAction]: (_, action) => action.payload,
// });

// const userListReducer = createReducer(usersInitialState.usersList, {
//   [userDeleteAction]: (state, action) => state.filter(user => user.id !== action.payload),
// });

// const usersReducer = combineReducers({
//   search: userSearchReducer,
//   usersList: userListReducer,
// });

// ----------------------
// ----------------------

// З використанням функцій createSlice
// -----------------------------------
const usersInitialState = {
  search: '',
  usersList: usersJson,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    // userSearchAction(state, action) {
    //   return state;
    // },
    userSearchAction: (state, action) => {
      state.search = action.payload;
    },
    userDeleteAction: (state, action) => {
      state.usersList = state.usersList.filter(user => user.id !== action.payload);
      // return { ...state, usersList: state.usersList.filter(user => user.id !== action.payload) };
    },
  },
});

// state -> userDeleteAction(state, action) -> newState
// state -> newState -> userDeleteAction(newState, action) -> newState -> component -> dispatch -> action

export const { userSearchAction, userDeleteAction } = usersSlice.actions;

// --------------------------

const rootInitialState = {
  counter: counterInitialState,
  users: usersInitialState,
};

// ---------------------
// ---------------------
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersSlice.reducer,
  },
  devTools: true,
  preloadedState: rootInitialState,
});
