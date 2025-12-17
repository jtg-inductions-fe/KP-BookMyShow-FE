/**
 * `SnackBarState` interface
 *
 * defines the structure of the props given to the snackbar.
 */
export interface SnackBarState {
    messages: string[];
    options?: {
        variant?: 'default' | 'error' | 'success' | 'warning' | 'info';
    };
}
