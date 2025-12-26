import { capitalize } from '@mui/material/utils';

import { BookingDetails } from '@components';
import { DATE_TIME_FORMATTER_OPTIONS } from '@constants';
import { Booking } from '@models';
import { currencyFormatter, dateFormatter, numberToChar } from '@utils';

/**
 * Enum for booking status.
 */
export enum BookingStatus {
    B = 'Booked',
    C = 'Cancelled',
}

/**
 * Adapter class for booking which give function to adapt booking data in multiple
 * component formats.
 */
export class BookingAdapter {
    private booking: Booking;

    constructor(obj: Booking) {
        this.booking = obj;
    }

    adaptToBookingCard() {
        return {
            id: this.booking.id,
            movie: capitalize(this.booking.movie),
            cinema: `${capitalize(this.booking.cinema)}, ${this.booking.location}`,
            slotDate: dateFormatter(this.booking.startTime),
            slotTime: dateFormatter(
                this.booking.startTime,
                undefined,
                DATE_TIME_FORMATTER_OPTIONS,
            ),
            price: currencyFormatter(this.booking.price),
            seats: this.booking.seats
                .map(
                    (seat) =>
                        `${numberToChar(seat.rowNumber)}${seat.seatNumber}`,
                )
                .join(', '),
            status: BookingStatus[this.booking.status],
            totalSeats: this.booking.seats.length,
        } satisfies BookingDetails;
    }
}
