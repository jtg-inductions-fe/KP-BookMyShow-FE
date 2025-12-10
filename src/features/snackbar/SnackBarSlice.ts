import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SnackBarState } from './SnackbarSlice.types';

const initialState: SnackBarState = {
    messages: [],
    options: {},
};

/**
 * A `snackbarSlice` A function that accepts an initial state,
 * an object full of reducer functions, and a "slice name",
 * and automatically generates action creators and action types
 * that correspond to the reducers and state.
 */
const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        showSnackbar: (
            state,
            action: PayloadAction<{
                messages: string[];
                options?: SnackBarState['options'];
            }>,
        ) => {
            state.messages = action.payload.messages;
            state.options = action.payload.options;
        },
        clearSnackbar: (state) => {
            state.messages = [];
            state.options = {};
        },
    },
});

export const { showSnackbar, clearSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
