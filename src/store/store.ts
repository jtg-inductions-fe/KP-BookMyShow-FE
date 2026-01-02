import { baseApi } from '@api';
import {
    authReducer,
    showSnackbar,
    snackbarReducer,
    userReducer,
} from '@features';
import {
    configureStore,
    isRejectedWithValue,
    Middleware,
} from '@reduxjs/toolkit';

let serverErrorShown = false;

/**
 * A global middleware all request goes through it.
 * use for catching `FETCH_ERROR` (in case of server down).
 */
export const rtkGlobalErrorCatcher: Middleware =
    (store) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            const status = (action.payload as { status: string }).status;
            if (status === 'FETCH_ERROR' && !serverErrorShown) {
                serverErrorShown = true;
                store.dispatch(
                    showSnackbar({
                        messages: [
                            'Server not responding. Please try again later.',
                        ],
                        options: { variant: 'error' },
                    }),
                );
                setTimeout(() => {
                    serverErrorShown = false;
                }, 5000);
            }
        }

        return next(action);
    };

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
        getDefaultMiddleware().concat(
            baseApi.middleware,
            rtkGlobalErrorCatcher,
        ),
    devTools: process.env.NODE_ENV !== 'production',
});
