import { Location, Slot } from '@models';

/**
 * Structure for MovieCinemaSlot coming from API.
 */
export interface MovieCinemaSlot {
    id: bigint;
    name: string;
    slug: string;
    location: Location;
    slots: Slot[];
}
