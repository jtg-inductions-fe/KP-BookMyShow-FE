import type { Components } from '@mui/material/styles';

import InterBoldWOFF2 from '@assets/fonts/inter/Inter-Bold.woff2';
import InterMediumWOFF2 from '@assets/fonts/inter/Inter-Medium.woff2';
import InterRegularWOFF2 from '@assets/fonts/inter/Inter-Regular.woff2';
import InterSemiBoldWOFF2 from '@assets/fonts/inter/Inter-SemiBold.woff2';
import { theme } from '@theme';

const fontFaceDeclarations = `
       @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url(${InterRegularWOFF2}) format('woff2');
        };

        @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url(${InterMediumWOFF2}) format('woff2');
        };

        @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url(${InterSemiBoldWOFF2}) format('woff2');
        };

        @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url(${InterBoldWOFF2}) format('woff2');
        };

    `;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: () => ({
            html: {
                fontSize: '62.5%',
                scrollBehavior: 'smooth',
            },
            fontFaceDeclarations,
            '*::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: theme.typography.pxToRem(5),
            },
            '*::-webkit-scrollbar-thumb': {
                borderRadius: theme.typography.pxToRem(5),
                backgroundColor: theme.palette.primary.main,
            },
            '*': {
                scrollbarWidth: 'thin',
                scrollbarColor: `${theme.palette.primary.main} transparent`,
            },
        }),
    },
};
