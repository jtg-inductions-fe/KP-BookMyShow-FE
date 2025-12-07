import { TypographyProps } from '@mui/material';

/**
 * Custom Typography Props.
 *
 * added lines for clamping extra lines.
 */
export type CustomTypographyProps = TypographyProps & {
    lines?: number;
};
