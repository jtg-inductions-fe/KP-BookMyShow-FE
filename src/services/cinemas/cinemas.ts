import { baseApi } from '@api';
import { Cinema, Location, SeatLayout } from '@models';

import { CinemaMovieSlot } from './cinemas.types';
import { CinemaApi, PaginatedResponse, SeatLayoutApi } from '../services.types';

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
                url: `api/cinemas/${slug}`,
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
        getSeatLayout: builder.query<SeatLayout, { id: number }>({
            query: ({ id }) => ({
                url: `api/cinemas/slot/${id}/seats/`,
                method: 'GET',
            }),
            transformResponse: (data: SeatLayoutApi): SeatLayout => ({
                ...data,
                seatsPerRow: data.seats_per_row,
                slotId: data.slot_id,
                slotPrice: data.slot_price,
                seats: data.seats.map((seat) => ({
                    ...seat,
                    rowNumber: seat.row_number,
                    seatNumber: seat.seat_number,
                })),
            }),
            providesTags: ['Booking'],
        }),
        bookSeats: builder.mutation<number, { id: number; seats: number[] }>({
            query: ({ id, seats }) => ({
                url: `api/cinemas/${id}/booking/`,
                method: 'POST',
                body: { seats },
            }),
            extraOptions: {
                requiresAuth: true,
            },
            invalidatesTags: ['Booking'],
        }),
        cancelBooking: builder.mutation<void, { id: number | undefined }>({
            query: ({ id }) => ({
                url: `api/cinemas/bookings/${id}/`,
                method: 'PATCH',
            }),
            extraOptions: {
                requiresAuth: true,
            },
            invalidatesTags: ['Booking'],
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
    useGetSeatLayoutQuery,
    useBookSeatsMutation,
    useCancelBookingMutation,
} = cinemaApi;

export const { useGetLocationsQuery } = locationApi;
