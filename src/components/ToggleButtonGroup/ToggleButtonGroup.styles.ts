import { NavLink } from 'react-router-dom';

import { styled, ToggleButtonGroup } from '@mui/material';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
    ({
        theme: {
            palette,
            typography: { pxToRem },
            breakpoints,
        },
    }) => ({
        borderRadius: pxToRem(50),

        overflow: 'hidden',

        background: palette.primary.main,
        padding: pxToRem(2),
        gap: pxToRem(8),
        [breakpoints.up('sm')]: {
            padding: pxToRem(4),
            gap: pxToRem(10),
        },
    }),
);

export const StyledToggleButton = styled(NavLink)(
    ({
        theme: {
            typography: { pxToRem },
            breakpoints,
        },
    }) => ({
        textTransform: 'none',
        border: 'none',
        borderRadius: pxToRem(50),
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        padding: `${pxToRem(5)} ${pxToRem(10)}`,
        [breakpoints.up('sm')]: {
            padding: `${pxToRem(3)} ${pxToRem(13)}`,
        },
    }),
);
