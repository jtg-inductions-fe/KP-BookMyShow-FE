import { lazy, LazyExoticComponent } from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { Header } from '@containers';
import { MainLayout } from '@layout';

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
const SignupPage = lazyLoadPage('SignupPage');
const LoginPage = lazyLoadPage('LoginPage');
const HomePage = lazyLoadPage('HomePage');
const MovieDetailPage = lazyLoadPage('MovieDetailPage');
const MovieListPage = lazyLoadPage('MovieListPage');
const CinemaListPage = lazyLoadPage('CinemaListPage');
const MovieCinemaSlotPage = lazyLoadPage('MovieCinemaSlotPage');
const CinemaMovieSlotPage = lazyLoadPage('CinemaMovieSlotPage');
const SeatLayoutPage = lazyLoadPage('SeatLayoutPage');
const ProfilePage = lazyLoadPage('ProfilePage');

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
            { index: true, element: <HomePage /> },
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
    {
        path: APP_ROUTES.MOVIE_DETAIL,
        element: <MainLayout header={<Header />} />,
        children: [
            { index: true, element: <MovieDetailPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
    {
        path: APP_ROUTES.MOVIES,
        element: <MainLayout header={<Header />} />,
        children: [
            { index: true, element: <MovieListPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
    {
        path: APP_ROUTES.CINEMAS,
        element: <MainLayout header={<Header />} />,
        children: [
            { index: true, element: <CinemaListPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
    {
        path: APP_ROUTES.MOVIE_CINEMAS_SLOTS,
        element: <MainLayout header={<Header />} />,
        children: [
            { index: true, element: <MovieCinemaSlotPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
    {
        path: APP_ROUTES.CINEMA_MOVIES_SLOTS,
        element: <MainLayout header={<Header />} />,
        children: [
            { index: true, element: <CinemaMovieSlotPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
    {
        path: APP_ROUTES.SEAT_LAYOUT,
        element: <MainLayout />,
        children: [
            { index: true, element: <SeatLayoutPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
    {
        path: APP_ROUTES.PROFILE,
        element: <MainLayout header={<Header />} />,
        children: [
            { index: true, element: <ProfilePage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
];

export const router = createBrowserRouter(routes);
