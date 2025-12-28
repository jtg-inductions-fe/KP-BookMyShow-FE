import { baseApi } from '@api';
import { Genre, Language, Movie } from '@models';

import { MovieCinemaSlot } from './movies.types';
import { MovieApi, PaginatedResponse } from '../services.types';

/**
 * The `movieApi` object injected with endpoints for fetching movie data.
 *
 * It provides methods to fetch movie data from the server.
 */
export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLatestMovies: builder.infiniteQuery<
            PaginatedResponse<Movie>,
            void,
            string | null
        >({
            query: ({ pageParam }) =>
                pageParam ? pageParam : `api/movies?latest=true`,
            infiniteQueryOptions: {
                initialPageParam: null,
                getNextPageParam: (lastPage) => lastPage.next,
            },
        }),
        getMovieDetails: builder.query<Movie, { slug: string }>({
            query: ({ slug }) => ({
                url: `api/movies/${slug}`,
                method: 'GET',
            }),
            transformResponse: ({
                release_date,
                ...response
            }: MovieApi): Movie => ({
                ...response,
                releaseDate: release_date,
            }),
        }),
        getMovies: builder.infiniteQuery<
            PaginatedResponse<Movie>,
            string,
            string | null
        >({
            query: ({ queryArg, pageParam }) =>
                pageParam ? pageParam : `api/movies?${queryArg}`,
            infiniteQueryOptions: {
                initialPageParam: null,
                getNextPageParam: (lastPage) => lastPage.next,
            },
            transformResponse: (
                response: PaginatedResponse<MovieApi>,
            ): PaginatedResponse<Movie> => ({
                ...response,
                results: response.results.map(({ release_date, ...movie }) => ({
                    ...movie,
                    releaseDate: release_date,
                })),
            }),
        }),
        getMovieCinemaSlots: builder.query<
            MovieCinemaSlot[],
            { slug: string; date: string | null }
        >({
            query: ({ slug, date }) => ({
                url: `api/movies/${slug}/cinemas/slots/`,
                method: 'GET',
                params: { date: date },
            }),
        }),
    }),
});

export const languageApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLanguages: builder.query<string[], void>({
            query: () => ({
                url: 'api/common/languages/',
                method: 'GET',
            }),
            transformResponse: (languages: Language[]) =>
                languages.map((language) => language.name),
        }),
    }),
});

export const genreApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGenres: builder.query<string[], void>({
            query: () => ({
                url: 'api/movies/genres/',
                method: 'GET',
            }),
            transformResponse: (genres: Genre[]) =>
                genres.map((genre) => genre.name),
        }),
    }),
});

export const {
    useGetLatestMoviesInfiniteQuery,
    useGetMovieDetailsQuery,
    useGetMoviesInfiniteQuery,
    useGetMovieCinemaSlotsQuery,
} = movieApi;

export const { useGetLanguagesQuery } = languageApi;

export const { useGetGenresQuery } = genreApi;
