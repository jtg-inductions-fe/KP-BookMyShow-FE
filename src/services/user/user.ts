import { Booking } from 'models/booking';

import { baseApi } from '@api';
import { User } from '@models';
import { BookingApi, PaginatedResponse } from '@services';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        profile: builder.query<User, void>({
            query: () => ({
                url: 'api/user/profile/',
                method: 'GET',
            }),
            extraOptions: {
                requiresAuth: true,
            },
        }),
        updateProfile: builder.mutation<User, Partial<User>>({
            query: (body) => ({
                url: 'api/user/profile/',
                method: 'PATCH',
                body: body,
            }),
            extraOptions: {
                requiresAuth: true,
            },
        }),
        getBookings: builder.infiniteQuery<
            PaginatedResponse<Booking>,
            string,
            string | null
        >({
            query: ({ queryArg, pageParam }) =>
                pageParam
                    ? pageParam
                    : `api/user/purchase-history/?${queryArg}`,
            infiniteQueryOptions: {
                initialPageParam: null,
                getNextPageParam: (lastPage) => lastPage.next,
            },
            extraOptions: {
                requiresAuth: true,
            },
            transformResponse: (
                data: PaginatedResponse<BookingApi>,
            ): PaginatedResponse<Booking> => ({
                ...data,
                results: data.results.map((booking) => ({
                    ...booking,
                    startTime: booking.start_time,
                    seats: booking.seats.map((seat) => ({
                        ...seat,
                        rowNumber: seat.row_number,
                        seatNumber: seat.seat_number,
                    })),
                })),
            }),
            providesTags: ['Booking'],
        }),
    }),
});

export const {
    useLazyProfileQuery,
    useGetBookingsInfiniteQuery,
    useUpdateProfileMutation,
} = userApi;
