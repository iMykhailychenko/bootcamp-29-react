import { Status } from 'constants/fetch-status';

export const authInitialState = {
  status: Status.Init,
  access_token: '',
  token_type: '',
};
