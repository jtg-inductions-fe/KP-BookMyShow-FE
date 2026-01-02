import { BoxProps, TypographyProps } from '@mui/material';

import { Typography } from '@components';

import { Gradient } from './common.styles';

/**
 * A component for gradient for making it consistent over whole app.
 * @param props MUi BoxProps.
 * @returns A Radial gradient.
 */
export const BackgroundGradient = (props: BoxProps) => <Gradient {...props} />;

/**
 * A component shows when there is no data, to make text consistent over the app.
 * @param children A text for the component.
 * @returns A Typography component.
 */
export const NoDataText = ({ children }: TypographyProps) => (
    <Typography variant="h3" color="primary.main" lines={1}>
        {children}
    </Typography>
);

/**
 * A component for Heading.
 * @param children A text for the component.
 * @returns A Typography component.
 */
export const Heading = ({ children }: TypographyProps) => (
    <Typography variant="h2" lines={1} width="80%">
        {children}
    </Typography>
);
