/**
 * A generic interface representing the response of API with paginated response.
 */
export interface PaginatedResponse<T> {
    next: string | null;
    previous: string | null;
    results: T[];
}
