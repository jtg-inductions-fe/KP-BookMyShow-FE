import { baseApi } from '@api';
import { Cinema, Location } from '@models';

import { CinemaMovieSlot } from './cinemas.types';
import { CinemaApi, PaginatedResponse } from '../services.types';

/**
 * The `cinemaApi` object injected with endpoints for fetching cinema data.
 *
 * It provides methods to fetch cinema data from the server.
 */
export const cinemaApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCinemas: builder.infiniteQuery<
            PaginatedResponse<Cinema>,
            string,
            string | null
        >({
            query: ({ queryArg, pageParam }) =>
                pageParam ? pageParam : `api/cinemas?${queryArg}`,
            infiniteQueryOptions: {
                initialPageParam: null,
                getNextPageParam: (lastPage) => lastPage.next,
            },
            transformResponse: (
                data: PaginatedResponse<CinemaApi>,
            ): PaginatedResponse<Cinema> => ({
                ...data,
                results: data.results.map(({ seats_per_row, ...cinema }) => ({
                    ...cinema,
                    seatsPerRow: seats_per_row,
                })),
            }),
        }),
        getCinemaDetails: builder.query<Cinema, { slug: string }>({
            query: ({ slug }) => ({
                url: `/api/cinemas/${slug}`,
                method: 'GET',
            }),
        }),
        getCinemaMovieSlots: builder.query<
            CinemaMovieSlot[],
            { slug: string; date: string | null }
        >({
            query: ({ slug, date }) => ({
                url: `api/cinemas/${slug}/movies/slots/`,
                method: 'GET',
                params: { date: date },
            }),
        }),
    }),
});

export const locationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLocations: builder.query<string[], void>({
            query: () => ({
                url: 'api/cinemas/locations/',
                method: 'GET',
            }),
            transformResponse: (locations: Location[]) =>
                locations.map((location) => location.city),
        }),
    }),
});

export const {
    useGetCinemasInfiniteQuery,
    useGetCinemaDetailsQuery,
    useGetCinemaMovieSlotsQuery,
} = cinemaApi;

export const { useGetLocationsQuery } = locationApi;
