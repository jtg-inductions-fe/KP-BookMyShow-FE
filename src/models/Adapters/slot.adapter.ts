import { SlotCardProps } from '@components';
import { DATE_TIME_FORMATTER_OPTIONS } from '@constants';
import { MovieCinemaSlot } from '@services';
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
            title: `${this.slot.name}, ${this.slot.location.city}`,
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
