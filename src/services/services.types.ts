import { Location } from '@models';

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
