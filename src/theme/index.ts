import { createTheme } from '@mui/material/styles';

import { SCALING_FACTOR } from '@constants';

/* Customized MUI components themes */
import { components } from './components';
/* Customized foundation themes */
import {
    breakpoints,
    mixins,
    palette,
    typography,
    zIndex,
} from './foundations';

/* 
Initialize the theme with base theme elements (excluding typography styles and spacing to ensure the theme has correct breakpoints and pxToRem function set.)
*/
let theme = createTheme({
    palette,
    breakpoints,
    mixins,
    components,
    zIndex,
    typography: {
        fontFamily: 'Inter',
        ...typography.typographyUtil,
    },
    spacing: (factor: number) =>
        theme.typography.pxToRem(factor * SCALING_FACTOR),
});

/* Extend the base theme with additional configurations */
theme = createTheme(theme, {
    typography: {
        allVariants: { lineHeight: 1.5 },
        ...typography.typographyStyle(theme),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: theme.shape.borderRadius * 5,
                    padding: theme.spacing(2, 3),
                },
            },
        },
    },
});

export { theme };
