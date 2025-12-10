import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { APP_ROUTES } from '@constants';

const routes: RouteObject[] = [
    {
        path: APP_ROUTES.HOME,
        element: <>Bookmyshow</>,
    },
];

export const router = createBrowserRouter(routes);
