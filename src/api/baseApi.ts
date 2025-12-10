import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * createApi is the core of RTK Query's functionality.
 *
 * It allows you to define a set of "endpoints" that describe
 * how to retrieve data from backend APIs and other async sources,
 * including the configuration of how to fetch and transform that data.
 */
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        credentials: 'include',
    }),
    endpoints: () => ({}),
});
