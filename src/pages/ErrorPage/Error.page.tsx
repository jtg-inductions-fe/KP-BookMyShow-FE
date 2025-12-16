import path from '@assets/images/server_error.webp';
import { ErrorComponent } from '@components';

/**
 * `ErrorPage` component renders an error page when a critical error occurs.
 * It provides a message informing the user about the issue and offers an option to navigate back to the home page.
 *
 * Functions:
 * - `HandleClick`: A handler function that uses `useNavigate` to navigate the user back to the home page (`APP_ROUTES.HOME`).
 *
 * Structure:
 * - `ErrorComponent`: Displays the error message and provides a button to navigate back home.
 *     - `imgPath`: Path to the image displayed on the error page.
 *     - `imgName`: Name of the image, used for descriptive purposes.
 *     - `heading`: Title of the error page.
 *     - `description`: Description explaining the error.
 *     - `buttonText`: Text for the button that allows the user to navigate back to the homepage.
 *     - `handleClick`: Function that handles the button click and navigates the user back to the homepage.
 */
export const ErrorPage = () => (
    <ErrorComponent
        imgPath={path}
        imgName="Error Found"
        heading="Something went wrong"
        description="Our servers are taking a short coffee break. Your shows will be back online faster than you can finish your popcorn!"
    />
);
