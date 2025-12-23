import Cookies from 'js-cookie';

import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from './AuthSlice.types';

const initialState: AuthState = {
    isAuthenticated: Cookies.get('refresh-token') ? true : false,
};

/**
 * Redux slice responsible for managing authentication state.
 *
 * This slice stores information such as whether the user
 * is authenticated.
 *
 * It exposes:
 * - `authSlice.reducer`
 * - `authSlice.actions`
 *
 */
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthState: (state) => {
            state.isAuthenticated = true;
        },
        clearAuthState: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { setAuthState, clearAuthState } = authSlice.actions;

export const authReducer = authSlice.reducer;
