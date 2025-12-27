import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constants';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
    },
    secondary: {
        main: COLORS.SECONDARY.MAIN,
        light: COLORS.SECONDARY.LIGHT,
    },
    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
        disabled: COLORS.TEXT.DISABLED,
    },
    info: {
        main: COLORS.INFO.MAIN,
        contrastText: COLORS.INFO.CONTRAST_TEXT,
    },
    success: {
        main: COLORS.SUCCESS.MAIN,
        contrastText: COLORS.SUCCESS.CONTRAST_TEXT,
    },
    error: {
        main: COLORS.ERROR.MAIN,
        contrastText: COLORS.ERROR.CONTRAST_TEXT,
    },
    background: {
        default: COLORS.BACKGROUND.DEFAULT,
        paper: COLORS.BACKGROUND.PAPER,
    },
    divider: COLORS.DIVIDER,
    action: {
        hover: COLORS.ACTION.HOVER,
    },
};
