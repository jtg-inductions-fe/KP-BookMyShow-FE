import { DetailCardData, VerticalCardData } from '@components';
import { Cinema } from '@models';

/**
 * Adapter class for cinema which give function to adapt cinema data in multiple
 * component formats.
 */
export class CinemaAdapter {
    private cinema: Cinema;

    constructor(obj: Cinema) {
        this.cinema = obj;
    }

    adaptToVCard() {
        return {
            title: this.cinema.name,
            subtitle1: this.cinema.location.city,
        } satisfies VerticalCardData;
    }

    adaptToDCard() {
        if (this.cinema === undefined) return {};
        return {
            title: this.cinema.name,
            subtitle1: this.cinema.location.city,
        } satisfies Partial<DetailCardData>;
    }
}
