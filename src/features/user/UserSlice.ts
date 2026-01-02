import { User } from '@models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: User = {
    name: '',
    email: '',
    phoneNumber: '',
};

/**
 * Redux slice responsible for managing user state.
 *
 * This slice stores information of user
 *
 * It exposes:
 * - `userSlice.reducer`
 * - `userSlice.actions`
 *
 */
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_, action: PayloadAction<User>) => action.payload,
        clearUser: () => initialState,
    },
});

export const { setUser, clearUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
