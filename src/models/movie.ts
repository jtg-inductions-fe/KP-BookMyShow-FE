/**
 * Represents a movie with its essential details.
 */
export interface Movie {
    id: bigint;
    title: string;
    description: string;
    duration: string;
    release_date: string;
    slug: string;
    genre: string[];
    language: string[];
}
