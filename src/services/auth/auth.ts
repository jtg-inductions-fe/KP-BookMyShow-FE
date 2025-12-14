import { baseApi } from '@api';

import {
    LoginRequest,
    LoginResponse,
    SignupRequest,
    SignupResponse,
} from './auth.types';

/**
 * `authApi` is a  function to inject the endpoints into the original API,
 * but also give you that same API with correct types for these endpoints back.
 *  Useful with code-splitting.
 */
export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation<SignupResponse, SignupRequest>({
            query: (data) => ({
                url: 'api/signup/',
                method: 'POST',
                body: data,
            }),
        }),
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (data) => ({
                url: 'api/login/',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
