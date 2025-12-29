import { useEffect, useRef } from 'react';

/**
 * Props for the `useInfiniteScroll` hook.
 *
 * This interface defines the properties required for triggering an action when the user reaches the bottom of the page.
 */
interface UseInfiniteScrollProps {
    onLoadMore: () => Promise<unknown>;

    hasNextPage: boolean;

    isFetching: boolean;

    rootMargin?: string;
}

/**
 * Custom hook for implementing infinite scrolling.
 *
 * This hook triggers a callback when the user reaches the bottom of the page or a specified threshold,
 * enabling infinite scrolling functionality, such as loading more items.
 */
export function useInfiniteScroll({
    onLoadMore,

    hasNextPage,

    isFetching,

    rootMargin = '200px',
}: UseInfiniteScrollProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!hasNextPage) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isFetching) {
                    void onLoadMore();
                }
            },

            { rootMargin },
        );

        const element = ref.current;

        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [onLoadMore, hasNextPage, isFetching, rootMargin]);

    return ref;
}
