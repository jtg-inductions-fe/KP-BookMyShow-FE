import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from './baseQuery';

/**
 * createApi is the core of RTK Query's functionality.
 *
 * It allows you to define a set of "endpoints" that describe
 * how to retrieve data from backend APIs and other async sources,
 * including the configuration of how to fetch and transform that data.
 */

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    tagTypes: ['Booking'],
});
