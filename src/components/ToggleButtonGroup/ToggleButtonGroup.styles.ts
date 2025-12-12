import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';

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

export const StyledToggleButton = styled(ToggleButton)(
    ({
        theme: {
            typography: { pxToRem },
            breakpoints,
        },
    }) => ({
        textTransform: 'none',
        border: 'none',
        borderRadius: pxToRem(50),
        '&.Mui-selected': {
            backgroundColor: 'transparent',
            color: 'inherit',
        },
        '&.Mui-selected:hover': {
            backgroundColor: 'transparent',
        },
        '&:hover': {
            backgroundColor: 'transparent',
        },
        padding: `${pxToRem(4)} ${pxToRem(8)}`,
        [breakpoints.up('sm')]: {
            padding: `${pxToRem(3)} ${pxToRem(10)}`,
        },
    }),
);
