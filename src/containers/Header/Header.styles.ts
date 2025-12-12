import { AppBar, Box, Stack, styled } from '@mui/material';

import { CONTAINER_MAX_WIDTH, HEADER_HEIGHT } from '@constants';

export const StyledAppBar = styled(AppBar)(
    ({
        theme: {
            shadows,
            typography: { pxToRem },
            palette,
            zIndex,
            spacing,
        },
    }) => ({
        display: 'flex',
        justifyContent: 'center',
        boxShadow: shadows[0],
        zIndex: zIndex.appBar,
        minHeight: pxToRem(HEADER_HEIGHT),
        backgroundColor: palette.background.default,
        padding: `0 ${spacing(3)}`,
    }),
);

export const MainContainer = styled(Stack)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: pxToRem(CONTAINER_MAX_WIDTH),
        margin: '0 auto',
        width: '100%',
    }),
);

export const LeftContainer = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        height: pxToRem(30),
        width: pxToRem(30),
    }),
);

export const RightContainer = styled(Stack)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 'auto',
        justifyContent: 'center',
        gap: pxToRem(15),
    }),
);
