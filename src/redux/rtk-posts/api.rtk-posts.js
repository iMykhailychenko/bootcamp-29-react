import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { selectAccessToken, selectTokenType } from 'redux/auth/selectors.auth';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://70.34.201.18:4444',
    prepareHeaders: (headers, { getState }) => {
      const state = getState();
      const tokenType = selectTokenType(state);
      const accessToken = selectAccessToken(state);

      if (tokenType && accessToken) {
        headers.set('Authorization', tokenType + ' ' + accessToken);
      }
      return headers;
    },
  }),
  endpoints: build => ({
    getPost: build.query({
      query: params => ({
        url: '/posts',
        params,
      }),
      providesTags: result => {
        return result?.data
          ? [...result.data.map(({ id }) => ({ type: 'Posts', id })), { type: 'Posts', id: 'LIST' }]
          : [{ type: 'Posts', id: 'LIST' }];
      },
    }),
    deletePost: build.mutation({
      query: id => ({
        url: '/posts/' + id,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => {
        if (!error) {
          return [{ type: 'Posts', id }];
        }
      },
    }),
  }),
});

export const { useGetPostQuery, useDeletePostMutation } = postsApi;
