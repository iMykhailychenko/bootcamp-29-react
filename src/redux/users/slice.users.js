import { createSlice } from '@reduxjs/toolkit';

import { usersInitialState } from './initial-state.users';

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    userSearchAction: (state, action) => {
      state.search = action.payload;
    },
    userDeleteAction: (state, action) => {
      state.usersList = state.usersList.filter(user => user.id !== action.payload);
    },
    toggleAction: state => {
      state.toggle = !state.toggle;
    },
  },
});

export const { userSearchAction, userDeleteAction, toggleAction } = usersSlice.actions;
export const userReducer = usersSlice.reducer;
