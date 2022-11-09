import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserService } from 'services/users.service';

export const loginOperation = createAsyncThunk('auth/login', loginUserService);
