import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { RootState } from '@store';

import { GuestRouteProps } from './routes.types';

/**
 * `GuestRoute`
 *
 * This route wrapper is used to redirect access to pages that should be visible to
 * unauthenticated users.
 */
export const GuestRoute = ({ children }: GuestRouteProps) => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return isAuthenticated ? (
        <Navigate to={APP_ROUTES.HOME} />
    ) : (
        <>{children}</>
    );
};
