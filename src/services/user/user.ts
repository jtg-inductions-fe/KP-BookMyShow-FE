import { baseApi } from '@api';

import { User } from './user.types';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        profile: builder.query<User, void>({
            query: () => ({
                url: '/api/user/profile/',
                method: 'GET',
                requiresAuth: true,
            }),
        }),
    }),
});

export const { useLazyProfileQuery } = userApi;
