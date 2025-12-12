import { User } from 'services/user/user.types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: User = {
    name: '',
    email: '',
    phone_number: '',
};

/**
 * Redux slice responsible for managing user state.
 *
 * This slice stores information of user
 *
 * It exposes:
 * - `userSlice.reducer`
 * - `userSlice.actions
 *
 */
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone_number = action.payload.phone_number;
        },
        clearUser: (state) => {
            state.name = '';
            state.email = '';
            state.phone_number = '';
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
