import { Form } from 'containers';
import { FieldValues } from 'react-hook-form';

import { Box, useMediaQuery, useTheme } from '@mui/material';

import { StyledBox, StyledImg } from './Auth.styles';
import { AuthProps } from './Auth.types';

/**
 * `AuthContainer` is a reusable container.
 * which provide flexibility for `signup` and `login` page.
 * @param AuthProps 'provides imgPath and config'
 *
 * @returns 'A `AuthContainer` which holds a image and forms.'
 */
export const AuthContainer = <T extends FieldValues>(Props: AuthProps<T>) => {
    const { breakpoints } = useTheme();

    const isTablet = useMediaQuery(breakpoints.up('md'));

    const { imgPath, formConfig } = Props;
    return (
        <StyledBox>
            {isTablet && (
                <Box height={'100%'} flex={1}>
                    <StyledImg
                        src={imgPath}
                        alt={`${formConfig.heading} image`}
                        aria-hidden={true}
                    />
                </Box>
            )}
            <Form {...formConfig} />
        </StyledBox>
    );
};
