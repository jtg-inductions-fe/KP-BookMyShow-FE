/**
 * Represents a movie with its essential details.
 */
export interface Movie {
    id: number;
    title: string;
    description: string;
    duration: string;
    releaseDate: string;
    slug: string;
    genre: string[];
    language: string[];
}
