export { useLoginMutation, useSignupMutation } from './auth';
export type {
    SignupRequest,
    SignupResponse,
    LoginRequest,
    LoginResponse,
} from './auth';
export * from './user';

export {
    useGetLatestMoviesInfiniteQuery,
    useGetMovieCinemaSlotsQuery,
    useGetMoviesInfiniteQuery,
    useGetMovieDetailsQuery,
    useGetLanguagesQuery,
    useGetGenresQuery,
} from './movies';
export type { MovieCinemaSlot } from './movies';

export { useGetCinemasInfiniteQuery, useGetLocationsQuery } from './cinemas';
