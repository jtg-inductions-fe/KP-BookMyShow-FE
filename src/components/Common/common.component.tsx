import { BoxProps, Typography } from '@mui/material';

import { Gradient } from './common.styles';

/**
 * A component for gradient for making it consistent over whole app.
 * @param props MUi BoxProps.
 * @returns A Radial gradient.
 */
export const BackgroundGradient = (props: BoxProps) => <Gradient {...props} />;

/**
 * A component when there is no data text consistent over the app..
 * @param text A message text
 * @returns A Typography component with text.
 */
export const NoDataText = ({ text }: { text: string }) => (
    <Typography variant="h3" color="primary.main">
        {text}
    </Typography>
);
