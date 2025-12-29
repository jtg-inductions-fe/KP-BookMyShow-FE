import { Slot } from '@models';

/**
 * Structure for CinemaMovieSlot coming from API.
 */
export interface CinemaMovieSlot {
    id: bigint;
    title: string;
    slug: string;
    duration: string;
    slots: Slot[];
}
