import { baseApi } from '@api';
import { snackbarReducer } from '@features';
import { configureStore } from '@reduxjs/toolkit';

/**
 * A friendly abstraction over the standard Redux createStore() function.
 * - holds reducers and middlewares.
 */
export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        snackbar: snackbarReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
