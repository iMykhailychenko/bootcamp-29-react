import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserService } from 'services/users.service';

import { setToken } from 'http/http';

export const loginOperation = createAsyncThunk('auth/login', async body => {
  const data = await loginUserService(body);

  setToken(data.token_type + ' ' + data.access_token);

  return data;
});
