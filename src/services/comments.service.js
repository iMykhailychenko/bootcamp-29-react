import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'http://comments.com/api',
});

export const getCommentsService = async () => {
  const { data } = await axios2.get('/comments');

  return data;
};
