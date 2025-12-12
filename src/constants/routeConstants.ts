/**
 * Routes PATH constants.
 */
export const APP_ROUTES = {
    HOME: '/',
    SIGNUP: '/signup',
    LOGIN: '/login',
    PROFILE: '/profile',
    MOVIES: '/movies',
    MOVIE_DETAIL: '/movies/:slug',
    CINEMAS: '/cinemas',
    MOVIE_CINEMAS_SLOTS: '/movies/:slug/cinemas',
    CINEMA_MOVIES_SLOTS: '/cinemas/:slug/movies',
    ORDER_SUMMARY: '/order-summary',
    PURCHASE_HISTORY: '/purchase-history',
    ERROR: '/error',
} as const;

/**
 * endpoints with constants.
 */
export const ENDPOINTS_WITH_HEADERS: string[] = ['profile'];
