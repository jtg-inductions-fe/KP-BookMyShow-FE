import { FieldValues } from 'react-hook-form';

import { Grid2, useMediaQuery, useTheme } from '@mui/material';

import { Form } from '@containers';

import { StyledGrid, StyledImg } from './Auth.styles';
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
        <StyledGrid container>
            {isTablet && (
                <Grid2 size={6}>
                    <StyledImg
                        src={imgPath}
                        alt={`${formConfig.heading} image`}
                        aria-hidden
                    />
                </Grid2>
            )}
            <Grid2 size={isTablet ? 6 : 12}>
                <Form {...formConfig} />
            </Grid2>
        </StyledGrid>
    );
};
