import { capitalize } from '@mui/material';

import { SlotCardProps } from '@components';
import { DATE_TIME_FORMATTER_OPTIONS } from '@constants';
import { CinemaMovieSlot, MovieCinemaSlot } from '@services';
import { dateFormatter } from '@utils';

/**
 * Adapter class for `moviecinemaslot` which give function to adapt moviecinemaslot data in multiple
 * component formats.
 */
export class MovieCinemaSlotAdapter {
    private slot: MovieCinemaSlot;

    constructor(obj: MovieCinemaSlot) {
        this.slot = obj;
    }

    adaptToSlotCard() {
        return {
            title: `${capitalize(this.slot.name)}, ${this.slot.location.city.toLowerCase()}`,
            slug: this.slot.slug,
            chipData: this.slot.slots.map((data) => ({
                key: data.id,
                value: dateFormatter(
                    data.start_time,
                    undefined,
                    DATE_TIME_FORMATTER_OPTIONS,
                ),
            })),
        } satisfies SlotCardProps;
    }
}

/**
 * Adapter class for `cinemamovieslot` which give function to adapt cinemamovieslot data in multiple
 * component formats.
 */
export class CinemaMovieSlotAdapter {
    private slot: CinemaMovieSlot;

    constructor(obj: CinemaMovieSlot) {
        this.slot = obj;
    }

    adaptToSlotCard() {
        return {
            title: capitalize(this.slot.title),
            slug: this.slot.slug,
            chipData: this.slot.slots.map((data) => ({
                key: data.id,
                value: dateFormatter(
                    data.start_time,
                    undefined,
                    DATE_TIME_FORMATTER_OPTIONS,
                ),
            })),
        } satisfies SlotCardProps;
    }
}
