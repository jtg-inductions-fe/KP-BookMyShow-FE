import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { store } from '@store';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Suspense fallback={<>Loading...</>}>
                    <RouterProvider router={router} />
                </Suspense>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
