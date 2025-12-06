import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { MainLayout } from '@layout';

const routes: RouteObject[] = [
    {
        path: APP_ROUTES.HOME,
        element: <MainLayout />,
    },
];

export const router = createBrowserRouter(routes);
