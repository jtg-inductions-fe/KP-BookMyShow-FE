import { lazy, LazyExoticComponent } from 'react';

import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { MainLayout } from '@layout';

type PagesModule = typeof import('@pages');

/* Reusable function for lazy loading */
export const lazyLoadPage = <K extends keyof PagesModule>(
    exportName: K,
): LazyExoticComponent<PagesModule[K]> =>
    lazy(() =>
        import('@pages').then((module) => ({
            default: module[exportName],
        })),
    );

const ErrorPage = lazyLoadPage('ErrorPage');

const NotFoundPage = lazyLoadPage('NotFoundPage');

/**
 * Define the routing structure for the application.
 *
 * This `routes` array holds the route configuration for the app.
 * It defines paths, elements, and nested routes.
 *
 * @type {RouteObject[]}
 */
const routes: RouteObject[] = [
    {
        path: APP_ROUTES.HOME,
        element: <MainLayout />,
        errorElement: <Navigate to={APP_ROUTES.ERROR} />,
        children: [
            { index: true, element: <>Bookmyshow</> },
            { path: APP_ROUTES.ERROR, element: <ErrorPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
];

export const router = createBrowserRouter(routes);
