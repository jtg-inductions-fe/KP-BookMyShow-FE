import Cookies from 'js-cookie';

import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';

import { ToggleButtonItem } from '@components';
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
 * `dispatch`
 * The Redux dispatch function used to trigger actions inside menu handlers.
 *
 * @returns
 * An array of menu options, each containing a label and an onClick handler.
 */
export const getMenuOptions = (
    handleClose: () => void,
    dispatch: AppDispatch,
): MenuOption[] => [
    { label: 'Profile', onClick: handleClose },
    {
        label: 'Logout',
        onClick: () => {
            Cookies.remove('refresh-token');
            Cookies.remove('access-token');
            dispatch(clearAuthState());
            dispatch(clearUser());
            handleClose();
        },
    },
];

//TODO - handleClick will be developed in upcoming PR's.

/**
 * config for menuItem.
 */
export const ToggleButtonItemConfig: ToggleButtonItem[] = [
    {
        label: 'Movies',
        handleClick: () => {},
        logo: MovieIcon,
    },
    {
        label: 'Cinemas',
        handleClick: () => {},
        logo: TheatersIcon,
    },
];
