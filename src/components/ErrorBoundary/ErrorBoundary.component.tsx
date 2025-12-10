/* eslint-disable no-console */
import { Component, ErrorInfo, ReactNode } from 'react';

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

    public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        console.error('Error in a child component: ', error);
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        if (import.meta.env.DEV) {
            console.error('ErrorBoundary detail: ', error, errorInfo);
        }
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
