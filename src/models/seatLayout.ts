import { Seat } from './seat';

/**
 * Interface representing the seat layout page structure.
 */
export interface SeatLayout {
    cinema: string;
    location: string;
    movie: string;
    rows: number;
    seatsPerRow: number;
    slotId: number;
    slotPrice: number;
    seats: Seat[];
}
