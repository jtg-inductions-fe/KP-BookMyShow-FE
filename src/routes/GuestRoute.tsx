import { Navigate } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { useAppSelector } from '@store';

import { RouteProps } from './routes.types';

/**
 * `GuestRoute`
 *
 * This route wrapper is used to redirect access to pages that should be visible to
 * unauthenticated users.
 */
export const GuestRoute = ({ children }: RouteProps) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return isAuthenticated ? (
        <Navigate to={APP_ROUTES.HOME} />
    ) : (
        <>{children}</>
    );
};
