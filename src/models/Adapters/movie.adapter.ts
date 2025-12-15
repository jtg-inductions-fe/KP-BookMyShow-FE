import { Movie } from 'models/movie';

import { capitalize } from '@mui/material/utils';

import { DetailCardData } from '@components';
import { VerticalCardData } from '@components';
import { dateFormatter, formatDuration } from '@utils';

/**
 * Adapter class for movie which give function to adapt movie data in multiple
 * component formats.
 */
export class MovieAdapter {
    private movie: Movie;

    constructor(obj: Movie) {
        this.movie = obj;
    }

    getInPipeFormate(values: string[]) {
        return values.map((value) => capitalize(value)).join(' | ');
    }
    adaptToVCard() {
        return {
            title: this.movie.title,
            subtitle1: this.movie.genre?.join(', '),
            subtitle2: this.movie.language?.join(', '),
        } satisfies VerticalCardData;
    }
    adaptToDCard() {
        return {
            title: this.movie.title,
            description: this.movie.description,
            subtitle1: this.getInPipeFormate(this.movie.genre),
            subtitle2: this.getInPipeFormate(this.movie.language),
            extraInfo: `${formatDuration(this.movie.duration)} \u00B7 ${dateFormatter(this.movie.release_date)}`,
        } satisfies DetailCardData;
    }
}
