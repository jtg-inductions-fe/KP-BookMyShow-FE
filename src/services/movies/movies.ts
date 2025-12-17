import { baseApi } from '@api';
import { Genre, Language, Movie } from '@models';

import { PaginatedResponse } from '../services.types';

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
        }),
        getMovies: builder.infiniteQuery<
            PaginatedResponse<Movie>,
            string,
            string | null
        >({
            query: ({ queryArg, pageParam }) =>
                pageParam ? pageParam : `/api/movies?${queryArg}`,
            infiniteQueryOptions: {
                initialPageParam: null,
                getNextPageParam: (lastPage) => lastPage.next,
            },
        }),
    }),
});

export const LanguageApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLanguages: builder.query<string[], void>({
            query: () => ({
                url: '/api/common/languages/',
                method: 'GET',
            }),
            transformResponse: (languages: Language[]) =>
                languages.map((language) => language.name),
        }),
    }),
});

export const GenreApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGenres: builder.query<string[], void>({
            query: () => ({
                url: '/api/movies/genres/',
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
} = movieApi;

export const { useGetLanguagesQuery } = LanguageApi;

export const { useGetGenresQuery } = GenreApi;
