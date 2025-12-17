import { ReactNode } from 'react';

/**
 * `ErrorBoundaryProps` interface
 * defines the structure of the ErrorBoundary props.
 */
export interface ErrorBoundaryProps {
    children: ReactNode;
    fallback: ReactNode;
}

/**
 * `ErrorBoundaryState` interface
 * defines the structure of the ErrorBoundaryState.
 */
export interface ErrorBoundaryState {
    hasError: boolean;
}
