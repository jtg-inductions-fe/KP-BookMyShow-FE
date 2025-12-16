import { Button, Tooltip, useMediaQuery, useTheme } from '@mui/material';

import stars from '@assets/images/stars.webp';
import { Typography } from '@components';

import { InnerStack, MainContainer, OuterContainer } from './Error.styles';
import { ErrorProps } from './Error.types';
/**
 * `ErrorComponent` renders an error message with an image, heading, description, and a button.
 * It's typically used to display error or not found pages with customizable content.
 *
 * Props:
 * - `imgPath`: The path to the image displayed on the error page.
 * - `imgName`: Descriptive name for the image.
 * - `heading`: Main heading text to display on the page.
 * - `description`: A description or additional details about the error.
 * - `buttonText`: Text to display on the button that navigates the user.
 * - `handleClick`: Function to handle the button click.
 *
 * Structure:
 * - `Stack`: A layout component used to arrange the image, text, and button.
 * - `img1`: Background image of stars fixed for each error page.
 * - `img2`: Displays the image with responsive sizing based on screen width.
 * - `Typography`: Displays the heading and description with text styles and optional tooltips.
 * - `Button`: A button that triggers the `handleClick` function when clicked.
 */
export const ErrorComponent = ({
    imgPath,
    imgName,
    heading,
    description,
    buttonText,
    handleClick,
}: ErrorProps) => {
    const { palette, breakpoints } = useTheme();

    const isTablet = useMediaQuery(breakpoints.up('sm'));

    return (
        <MainContainer aria-labelledby="heading" role="region">
            <img
                src={stars}
                alt="stars"
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: -1,
                }}
                loading="lazy"
                aria-hidden={true}
            />

            <img
                src={imgPath}
                alt={imgName}
                style={{ maxWidth: isTablet ? '50%' : '100%' }}
                loading="lazy"
                aria-hidden={true}
            />

            <OuterContainer>
                <InnerStack>
                    <Typography
                        id="heading"
                        variant="h1"
                        textAlign="center"
                        color={palette.text.primary}
                    >
                        {heading}
                    </Typography>

                    <Tooltip title={description} placement="top-end">
                        <Typography
                            variant="body1"
                            color={palette.text.primary}
                            textAlign="center"
                            lines={3}
                        >
                            {description}
                        </Typography>
                    </Tooltip>
                </InnerStack>
                {buttonText && (
                    <Button variant="contained" onClick={handleClick}>
                        {buttonText}
                    </Button>
                )}
            </OuterContainer>
        </MainContainer>
    );
};
