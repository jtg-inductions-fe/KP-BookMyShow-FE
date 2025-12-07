import { Box, styled } from '@mui/material';

import { CONTAINER_MAX_WIDTH, HEADER_HEIGHT } from '@constants';

export const MainContent = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        height: `calc(100vh - ${pxToRem(HEADER_HEIGHT)})`,
        maxWidth: pxToRem(CONTAINER_MAX_WIDTH),
        margin: '0 auto',
        paddingTop: pxToRem(HEADER_HEIGHT),
    }),
);
