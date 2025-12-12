import { baseApi } from '@api';
import { authReducer, snackbarReducer, userReducer } from '@features';
import { configureStore } from '@reduxjs/toolkit';

/**
 * A friendly abstraction over the standard Redux createStore() function.
 * - holds reducers and middlewares.
 */
export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        snackbar: snackbarReducer,
        auth: authReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
