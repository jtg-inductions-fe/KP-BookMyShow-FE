import { Location } from './location';

/**
 * Represents a cinema with its essential details.
 */
export interface Cinema {
    id: number;
    name: string;
    location: Location;
    rows: number;
    seatsPerRow: number;
    slug: string;
}
