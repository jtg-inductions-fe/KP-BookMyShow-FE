import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

import { APP_ROUTES } from '@constants';

import { GuestRouteProps } from './routes.types';

/**
 * `GuestRoute`
 *
 * This route wrapper is used to redirect access to pages that should be visible to
 * unauthenticated users.
 */
export const GuestRoute = ({ children }: GuestRouteProps) => {
    const token = Cookies.get('token');

    return token ? <Navigate to={APP_ROUTES.HOME} /> : <>{children}</>;
};
