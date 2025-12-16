import { useNavigate } from 'react-router-dom';

import path from '@assets/images/not_found.webp';
import { ErrorComponent } from '@components';
import { APP_ROUTES } from '@constants';

/**
 * `NotFoundPage` component renders an error page when a user navigates to a non-existent route.
 * It provides an option to navigate back to the home page.
 *
 * Functions:
 * - `HandleClick`: A handler function that uses `useNavigate` to navigate the user back to the home page (`APP_ROUTES.HOME`).
 *
 * Structure:
 * - `ErrorComponent`: Displays the error message and provides a button for the user to navigate back home.
 *     - `imgPath`: Path to the image shown on the error page.
 *     - `imgName`: Name of the image, used for descriptive purposes.
 *     - `heading`: Title of the error page.
 *     - `description`: Description explaining the error.
 *     - `buttonText`: Text for the button that will allow the user to navigate back to the homepage.
 *     - `handleClick`: Function to handle the button click and navigate the user back to the homepage.
 */
export const NotFoundPage = () => {
    const navigate = useNavigate();

    const HandleClick = () => {
        void navigate(APP_ROUTES.HOME);
    };

    return (
        <ErrorComponent
            imgPath={path}
            imgName="Not Found"
            heading="Page not found"
            description="Looks like you followed a wrong ticket… this page isn’t on the lineup tonight."
            buttonText="Go back home"
            handleClick={HandleClick}
        />
    );
};
