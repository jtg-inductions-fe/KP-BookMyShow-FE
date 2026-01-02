import { capitalize } from '@mui/material/utils';

import { DetailCardData } from '@components';
import { VerticalCardData } from '@components';
import { Movie } from '@models';
import { dateFormatter, formatDuration } from '@utils';

/**
 * Adapter class for movie which gives functions to adapt movie data in multiple
 * component formats.
 */
export class MovieAdapter {
    private movie: Movie;

    constructor(obj: Movie) {
        this.movie = obj;
    }

    private getInPipeFormat(values: string[]) {
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
            subtitle1: this.getInPipeFormat(this.movie.genre),
            subtitle2: this.getInPipeFormat(this.movie.language),
            extraInfo: `${formatDuration(this.movie.duration)} \u00B7 ${dateFormatter(this.movie.releaseDate)}`,
        } satisfies DetailCardData;
    }
}
