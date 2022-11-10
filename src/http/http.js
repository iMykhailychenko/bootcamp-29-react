import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'http://70.34.201.18:4444',
});

export const privateApi = axios.create({
  baseURL: 'http://70.34.201.18:4444',
});

export const setToken = token => {
  privateApi.defaults.headers.Authorization = token;
};

export const deleteToken = () => {
  privateApi.defaults.headers.Authorization = '';
};
