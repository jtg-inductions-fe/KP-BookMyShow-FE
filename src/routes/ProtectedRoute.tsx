import { Navigate } from 'react-router-dom';

import { APP_ROUTES } from '@constants';
import { useAppSelector } from '@store';

import { RouteProps } from './routes.types';

/**
 * `ProtectedRoute`
 *
 * This route wrapper is used to redirect access to pages that should be visible to
 * authenticated users.
 */
export const ProtectedRoute = ({ children }: RouteProps) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <Navigate to={APP_ROUTES.LOGIN} />
    );
};
