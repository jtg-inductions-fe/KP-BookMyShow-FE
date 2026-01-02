import { BookingStatus } from '@models';

import { Seat } from './seat';

/**
 * Interface representing Structure of the booking.
 */
export interface Booking {
    id: number;
    movie: string;
    cinema: string;
    location: string;
    startTime: string;
    status: keyof typeof BookingStatus;
    price: number;
    seats: Seat[];
}
