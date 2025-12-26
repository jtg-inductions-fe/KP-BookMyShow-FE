import { useState } from 'react';

import { Box, Stack } from '@mui/material';

import {
    BookingDetailHolder,
    BookingDetailModal,
    Grid,
    Loader,
    NoDataText,
    Typography,
} from '@components';
import { Filter } from '@containers';
import { showSnackbar } from '@features';
import { useBookingState, useInfiniteScroll } from '@hooks';
import { BookingAdapter } from '@models';
import {
    useCancelBookingMutation,
    useGetBookingsInfiniteQuery,
} from '@services';
import { useAppDispatch } from '@store';
import { exists, setFilter } from '@utils';

import { DefaultFilter, FilterData } from './BookingHistory.constants';

/**
 * A Container which have Business logic of the container and render `BookingDetailHolder` and `BookingDetailModal`.
 * @returns A rendered component for rendering the BookingHistory component.
 */
export const BookingHistory = () => {
    const dispatch = useAppDispatch();

    const [CancelBooking] = useCancelBookingMutation();

    const [filterParams, setFilterState] = useState<URLSearchParams>(
        () => new URLSearchParams({ booking: DefaultFilter }),
    );
    const {
        selectedBooking,
        transactionDetail,
        open,
        openDetails,
        closePopover,
    } = useBookingState();

    const { data, fetchNextPage, isLoading, isFetching, hasNextPage, refetch } =
        useGetBookingsInfiniteQuery(filterParams?.toString());

    const currentData = data?.pages.flatMap((movie) => movie.results);

    const endRef = useInfiniteScroll({
        hasNextPage: hasNextPage,
        isFetching,
        onLoadMore: fetchNextPage,
    });

    const formattedData = currentData?.map((booking) =>
        new BookingAdapter(booking).adaptToBookingCard(),
    );

    const onCancelClick = async (id?: number): Promise<void> => {
        try {
            await CancelBooking({ id });
            closePopover();
            await refetch();
            dispatch(
                showSnackbar({
                    messages: ['booking cancelled successfully!'],
                    options: { variant: 'success' },
                }),
            );
        } catch (error) {
            const errorData = (error as { data: Record<string, string> }).data;
            dispatch(
                showSnackbar({
                    messages: Object.values(errorData).flat(),
                    options: { variant: 'error' },
                }),
            );
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Stack gap={3} flex={1}>
            <Filter
                filterData={FilterData}
                onClick={(key, value) =>
                    setFilter(filterParams, setFilterState, key, value)
                }
                onCheck={(key, value) => exists(filterParams, key, value)}
            />
            <Stack flex={1} gap={5}>
                <Typography variant={'h2'}>Bookings</Typography>

                {formattedData?.length ? (
                    <>
                        <Grid
                            gridItemsData={formattedData}
                            gridColumns={{ xxs: 12, xs: 6, sm: 12 }}
                            spacing={{ xxs: 5, xs: 3 }}
                            renderNode={(booking) => (
                                <BookingDetailHolder
                                    booking={booking}
                                    imgUrl={`https://picsum.photos/id/${booking.id}/900/900`}
                                    onClick={(bookingData) =>
                                        openDetails(bookingData)
                                    }
                                />
                            )}
                        />
                        <Box ref={endRef} style={{ height: 1 }} />
                    </>
                ) : (
                    <NoDataText text="No Booking available" />
                )}
            </Stack>
            {selectedBooking && (
                <BookingDetailModal
                    open={open}
                    onClose={closePopover}
                    detailCardData={selectedBooking}
                    TransactionDetail={transactionDetail}
                    btnText="Cancel Booking"
                    handlePopOverButtonClick={() =>
                        onCancelClick(selectedBooking?.id)
                    }
                />
            )}
        </Stack>
    );
};
