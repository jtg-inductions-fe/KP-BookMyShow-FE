import { BookingStatus, Location } from '@models';

/**
 * A generic interface representing the response of API with paginated response.
 */
export interface PaginatedResponse<T> {
    next: string | null;
    previous: string | null;
    results: T[];
}

/**
 * Cinema response type for the endpoint.
 */
export interface CinemaApi {
    id: number;
    name: string;
    location: Location;
    rows: number;
    seats_per_row: number;
    slug: string;
}

/**
 * Interface representing the seat layout Api structure.
 */
export interface SeatLayoutApi {
    cinema: string;
    location: string;
    movie: string;
    rows: number;
    seats_per_row: number;
    slot_id: number;
    slot_price: number;
    seats: SeatApi[];
}

/**
 * Interface representing the booking Api structure.
 */
export interface BookingApi {
    id: number;
    movie: string;
    cinema: string;
    location: string;
    start_time: string;
    status: keyof typeof BookingStatus;
    price: number;
    seats: SeatApi[];
}

/**
 * Interface representing the seat Api structure.
 */
export interface SeatApi {
    id: number;
    row_number: number;
    seat_number: number;
    available: boolean;
}

/**
 * Interface representing the Movie Api structure.
 */
export interface MovieApi {
    id: number;
    title: string;
    description: string;
    duration: string;
    release_date: string;
    slug: string;
    genre: string[];
    language: string[];
}
