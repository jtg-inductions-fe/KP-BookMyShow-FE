import { Component, ReactNode } from 'react';

import { Typography } from 'components';

import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

/**
 * `ErrorBoundary` component
 *
 * Catch the error in whole application layout
 *
 */
export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    public state: ErrorBoundaryState = { hasError: false };

    public static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    private renderDefaultFallback(): ReactNode {
        return (
            <Typography variant="h3" align="center" sx={{ mt: 6 }}>
                Something went wrong
            </Typography>
        );
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback ?? this.renderDefaultFallback();
        }
        return this.props.children;
    }
}
