import { Box, styled } from '@mui/material';

import { CONTAINER_MAX_WIDTH, HEADER_HEIGHT } from '@constants';

export const MainContent = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'hasHeader',
})<{ hasHeader: boolean }>(
    ({
        theme: {
            typography: { pxToRem },
        },
        hasHeader,
    }) => ({
        height: hasHeader ? `calc(100vh - ${pxToRem(HEADER_HEIGHT)})` : '100%',
        maxWidth: pxToRem(CONTAINER_MAX_WIDTH),
        margin: '0 auto',
        paddingTop: hasHeader ? pxToRem(HEADER_HEIGHT) : 0,
    }),
);
