import type { BreakpointsOptions } from '@mui/material/styles';

import { BREAKPOINTS } from '@constants';

/* Custom Breakpoints */
export const breakpoints: BreakpointsOptions = {
    values: {
        xxs: BREAKPOINTS.XXS,
        xs: BREAKPOINTS.XS,
        sm: BREAKPOINTS.SM,
        md: BREAKPOINTS.MD,
        lg: BREAKPOINTS.LG,
        xl: BREAKPOINTS.XL,
    },
};
