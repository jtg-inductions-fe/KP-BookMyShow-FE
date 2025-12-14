/**
 * Color palette used in the application.
 * @constant
 */
export const COLORS = {
    PRIMARY: {
        MAIN: '#F84565',
    },
    SECONDARY: {
        MAIN: '#F8456665',
    },
    TEXT: {
        PRIMARY: '#FFFFFF',
        SECONDARY: '#797B7D',
    },
    INFO: {
        MAIN: '#99A1AF',
        CONTRAST_TEXT: '#FFFFFF',
    },
    SUCCESS: {
        MAIN: '#4CAF50',
        CONTRAST_TEXT: '#FFFFFF',
    },
    ERROR: {
        MAIN: '#D32F2F',
        CONTRAST_TEXT: '#FFFFFF',
    },
    BACKGROUND: {
        DEFAULT: '#09090B',
        PAPER: '#12161C',
    },
    DIVIDER: '#4B4F54',
} as const;

/**
 * Breakpoints used in the application.
 */
export const BREAKPOINTS = {
    XS: 320,
    SM: 768,
    MD: 1024,
    LG: 1440,
    XL: 1920,
} as const;

/**
 * The default locale for the application.
 */
export const DEFAULT_LOCALE: Intl.LocalesArgument = 'en-IN';

/**
 * The default height for the header.
 */
export const HEADER_HEIGHT = 75;

/**
 * The max width of the main container.
 */
export const CONTAINER_MAX_WIDTH = 1600;

/**
 * Base font size in pixels.
 * @constant
 */
export const HTML_FONT_SIZE = 10;

/**
 * Scaling factor used for spacing.
 * @constant
 */
export const SCALING_FACTOR = 4;

/**
 * Snackbar component duration.
 */
export const SNACKBAR_DURATION = 5000;
