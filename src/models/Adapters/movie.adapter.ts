import { Movie } from 'models/movie';

import { VerticalCardData } from '@components';

export class MovieAdapter {
    private movie: Movie;

    constructor(obj: Movie) {
        this.movie = obj;
    }

    adaptToVCard() {
        return {
            title: this.movie.title,
            subtitle1: this.movie.genre?.join(', '),
            subtitle2: this.movie.language?.join(', '),
        } satisfies VerticalCardData;
    }
}
