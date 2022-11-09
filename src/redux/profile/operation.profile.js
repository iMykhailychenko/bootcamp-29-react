import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersService } from 'services/users.service';

export const getProfileOperation = createAsyncThunk('profile/getProfile', getUsersService);
