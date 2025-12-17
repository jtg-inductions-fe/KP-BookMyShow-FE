import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { SnackbarHandler } from '@components';
import { router } from '@routes';
import { store } from '@store';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <SnackbarProvider
                maxSnack={4}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <SnackbarHandler />
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Suspense fallback={<>Loading...</>}>
                        <RouterProvider router={router} />
                    </Suspense>
                </ThemeProvider>
            </SnackbarProvider>
        </Provider>
    </StrictMode>,
);
