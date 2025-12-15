import { baseApi } from '@api';
import { Movie } from '@models';

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
                url: `/api/movies/${slug}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetLatestMoviesInfiniteQuery, useGetMovieDetailsQuery } =
    movieApi;
