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
    SEAT_LAYOUT: '/slots/:id/seat-layout',
    ERROR: '/error',
    NOTFOUND: '/notfound',
} as const;

/**
 * API endpoints that should include auth headers.
 */
export const ENDPOINTS_WITH_HEADERS: string[] = [
    'profile',
    'bookSeats',
    'getBookings',
    'updateProfile',
    'cancelBooking',
];
