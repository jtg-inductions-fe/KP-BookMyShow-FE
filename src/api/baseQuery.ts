import Cookies from 'js-cookie';
import { ACCESS_COOKIE_LIFETIME_IN_MINUTES } from 'pages/LoginPage/Login.constants';

import { ENDPOINTS_WITH_HEADERS } from '@constants';
import { clearAuthState, clearUser } from '@features';
import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

/**
 * Adds optional metadata used by a custom baseQuery wrapper.
 *
 * @property {requiresAuth}
 * If true, the request will tell request need to check tokens.
 *
 * @extends FetchArgs
 */
interface CustomFetchArgs extends FetchArgs {
    requiresAuth?: boolean;
}

/**
 *
 * This base query:
 * - Uses the API URL defined in the Vite environment variable `VITE_API_URL`
 * - Sends cookies with every request by setting `credentials: 'include'`
 * - checks which endpoints requires `access` token.
 *
 */
export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
    prepareHeaders: (headers, { endpoint }) => {
        const token = Cookies.get('access-token');
        if (token && ENDPOINTS_WITH_HEADERS.includes(endpoint)) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

/**
 * A wrapper around `fetchBaseQuery` that allows passing custom options
 * such as `requiresAuth` to control request behavior.
 *
 * Features:
 * - check expiry of both access and refresh token.
 * - generate or throw error according to it.
 */
export const baseQueryWithReauth: BaseQueryFn<
    string | CustomFetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, store, extraOptions) => {
    const needsAuth = (args as CustomFetchArgs)?.requiresAuth ?? false;

    if (needsAuth) {
        const refreshToken = Cookies.get('refresh-token');
        const accessToken = Cookies.get('access-token');

        if (!refreshToken) {
            Cookies.remove('refresh-token');
            store.dispatch(clearAuthState());
            store.dispatch(clearUser());
            return { error: { status: 401, data: 'Unauthorized' } };
        } else if (!accessToken) {
            const refreshResult = await baseQuery(
                {
                    url: '/api/token/refresh/',
                    method: 'POST',
                    body: JSON.stringify({ refresh: refreshToken }),
                    headers: { 'Content-Type': 'application/json' },
                },
                store,
                extraOptions,
            );

            if (refreshResult.error) {
                Cookies.remove('refresh-token');
                store.dispatch(clearAuthState());
                store.dispatch(clearUser());
                return { error: { status: 401, data: 'Unauthorized' } };
            } else {
                const access = (refreshResult.data as { access: string })
                    .access;
                Cookies.set('access-token', access, {
                    expires: ACCESS_COOKIE_LIFETIME_IN_MINUTES / (24 * 60),
                    secure: true,
                    sameSite: 'strict',
                });
            }
        }
    }

    return await baseQuery(args, store, extraOptions);
};
