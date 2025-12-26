import { useState } from 'react';

import dayjs from 'dayjs';

import { ChairOutlined, CurrencyRupee } from '@mui/icons-material';

import { BookingDetails, DetailCardData, Transaction } from '@components';
import { BookingStatus } from '@models';

/**
 * A customHook for encapsulating the booking related logic.
 * @returns provide access to state and functions used for booking.
 */
export const useBookingState = () => {
    const [selectedBooking, setSelectedBooking] = useState<Partial<
        DetailCardData & { id: number }
    > | null>(null);
    const [transactionDetail, setTransactionDetail] = useState<Transaction[]>(
        [],
    );
    const [open, setOpen] = useState(false);
    const openDetails = (booking: BookingDetails) => {
        const bookingDateTime = dayjs(
            `${booking.slotDate} ${booking.slotTime}`,
            'YYYY-MM-DD HH:mm',
        );
        const currentDateTime = dayjs();

        if (
            booking.status !== BookingStatus.B ||
            bookingDateTime.isBefore(currentDateTime)
        )
            return;

        setSelectedBooking({
            id: booking.id,
            title: booking.movie,
            subtitle1: booking.cinema,
            description: booking.seats,
        });
        setTransactionDetail([
            {
                Icon: ChairOutlined,
                detail: `total seats: ${booking.totalSeats}`,
            },
            {
                Icon: CurrencyRupee,
                detail: `total price: ${booking.price}`,
            },
        ]);
        setOpen(true);
    };

    const closePopover = () => {
        setOpen(false);
        setSelectedBooking(null);
    };

    return {
        selectedBooking,
        transactionDetail,
        open,
        openDetails,
        closePopover,
    };
};
