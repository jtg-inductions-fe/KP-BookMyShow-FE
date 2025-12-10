import { lazy, LazyExoticComponent } from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { Header } from '@containers';
import { MainLayout } from '@layout';
import { LoginPage, SignupPage } from '@pages';

import { GuestRoute } from './GuestRoute';

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
        element: <MainLayout header={<Header />} />,
        children: [
            { index: true, element: <>Bookmyshow</> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
    {
        path: APP_ROUTES.SIGNUP,
        element: (
            <GuestRoute>
                <MainLayout />
            </GuestRoute>
        ),
        children: [
            { index: true, element: <SignupPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
    {
        path: APP_ROUTES.LOGIN,
        element: (
            <GuestRoute>
                <MainLayout />
            </GuestRoute>
        ),
        children: [
            { index: true, element: <LoginPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
];

export const router = createBrowserRouter(routes);
