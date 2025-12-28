import { Booking } from 'models/booking';

import { baseApi } from '@api';
import { User } from '@models';
import { BookingApi, PaginatedResponse, UserApi } from '@services';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query<User, void>({
            query: () => ({
                url: 'api/user/profile/',
                method: 'GET',
            }),
            extraOptions: {
                requiresAuth: true,
            },
            transformResponse: ({ phone_number, ...data }: UserApi): User => ({
                ...data,
                phoneNumber: phone_number,
            }),
        }),
        updateProfile: builder.mutation<User, Partial<UserApi>>({
            query: ({ phoneNumber, ...body }: User) => ({
                url: 'api/user/profile/',
                method: 'PATCH',
                body: { ...body, phone_number: phoneNumber },
            }),
            extraOptions: {
                requiresAuth: true,
            },
            transformResponse: ({ phone_number, ...data }: UserApi): User => ({
                ...data,
                phoneNumber: phone_number,
            }),
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
                    seats: booking.seats.map(
                        ({ row_number, seat_number, ...rest }) => ({
                            ...rest,
                            rowNumber: row_number,
                            seatNumber: seat_number,
                        }),
                    ),
                })),
            }),
            providesTags: ['Booking'],
        }),
    }),
});

export const {
    useLazyGetProfileQuery,
    useGetBookingsInfiniteQuery,
    useUpdateProfileMutation,
} = userApi;
