import axios from 'axios';

const postApi = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://taupe-croissant-c4162a.netlify.app/api'
      : 'http://70.34.201.18:8080',

  params: {
    api_key: 'sdvfvdfvfd',
  },
});

export const getPostsService = async params => {
  const { data } = await postApi.get('/posts', { params });

  return data;
};
