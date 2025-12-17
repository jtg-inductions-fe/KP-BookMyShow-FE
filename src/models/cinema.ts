import { Location } from './location';

/**
 * Represents a cinema with its essential details.
 */
export interface Cinema {
    id: bigint;
    name: string;
    location: Location;
    rows: number;
    seats_per_row: number;
    slug: string;
}
