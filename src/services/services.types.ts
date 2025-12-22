import { Location, Seat } from '@models';

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
    seats: Seat[];
}
