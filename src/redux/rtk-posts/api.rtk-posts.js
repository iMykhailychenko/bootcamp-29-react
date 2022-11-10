import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://70.34.201.18:4444',
  }),
  endpoints: build => ({
    // query === GET
    getPost: build.query({
      query: params => ({
        url: '/posts',
        params,
      }),
    }),
  }),
});

export const { useGetPostQuery } = postsApi;
