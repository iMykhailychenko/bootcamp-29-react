import { privateApi, publicApi } from 'http/http';

import { PAGE_LIMIT } from '../constants/pagination';

export const getPostsService = async params => {
  const { data } = await publicApi.get('/posts', { params: { ...params, limit: PAGE_LIMIT } });
  return data;
};

export const createNewPostService = async body => {
  const { data } = await privateApi.post('/posts', body);
  return data;
};

export const getSinglePostService = async (id, params) => {
  const { data } = await publicApi.get(`/posts/${id}`, { params });
  return data;
};

export const deletePostService = id => {
  return privateApi.delete(`/posts/${id}`);
};
