import Cookies from 'js-cookie';
import { NavigateFunction } from 'react-router-dom';

import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';

import { ToggleButtonItem } from '@components';
import { APP_ROUTES } from '@constants';
import { clearAuthState, clearUser } from '@features';
import { AppDispatch } from '@store';
/**
 * Represents a single option inside a menu.
 *
 * @property  label - The text displayed for the menu option.
 * @property  onClick - Function executed when the option is selected.
 */
export interface MenuOption {
    label: string;
    onClick: () => void;
}

/**
 * Generates a list of menu options with pre-configured click handlers.
 *
 * Useful for menus that require closing behavior and Redux dispatching.
 *
 *`handleClose`
 * A callback invoked after a menu option is selected.
 * Typically used to close the menu UI.
 *
 * `navigate`
 * The Navigation Function for navigate to different pages.
 *
 * `dispatch`
 * The Redux dispatch function used to trigger actions inside menu handlers.
 *
 * @returns
 * An array of menu options, each containing a label and an onClick handler.
 */
export const getMenuOptions = (
    handleClose: () => void,
    dispatch: AppDispatch,
    navigate: NavigateFunction,
): MenuOption[] => [
    {
        label: 'Profile',
        onClick: () => {
            handleClose();
            void navigate(APP_ROUTES.PROFILE);
        },
    },
    {
        label: 'Logout',
        onClick: () => {
            Cookies.remove('refresh-token');
            Cookies.remove('access-token');
            dispatch(clearAuthState());
            dispatch(clearUser());
            handleClose();
            void navigate(APP_ROUTES.HOME, { replace: true });
        },
    },
];

/**
 * config for ToggleButtons defining the properties of `ToggleButtonItem`.
 */
export const ToggleButtonItemConfig: ToggleButtonItem[] = [
    {
        label: 'movies',
        logo: MovieIcon,
        url: APP_ROUTES.MOVIES,
    },
    {
        label: 'cinemas',
        logo: TheatersIcon,
        url: APP_ROUTES.CINEMAS,
    },
];
