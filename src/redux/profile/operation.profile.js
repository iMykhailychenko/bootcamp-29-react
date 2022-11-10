import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersService } from 'services/users.service';

import { setToken } from 'http/http';

import { selectAccessToken, selectTokenType } from '../auth/selectors.auth';

export const getProfileOperation = createAsyncThunk('profile/getProfile', (_, { getState, rejectWithValue }) => {
  const state = getState();
  const tokenType = selectTokenType(state);
  const accessToken = selectAccessToken(state);

  if (!tokenType || !accessToken) {
    return rejectWithValue();
  }

  setToken(tokenType + ' ' + accessToken);
  return getUsersService();
});
