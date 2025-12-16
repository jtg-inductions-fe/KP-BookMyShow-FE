import { styled, Typography } from '@mui/material';

import { CustomTypographyProps } from './Typography.types';

export const CustomTypography = styled(Typography)<CustomTypographyProps>(({
    lines,
    theme,
}) => {
    const { lineClamp } = theme.mixins;
    if (lines) {
        return lineClamp(lines);
    }
});
