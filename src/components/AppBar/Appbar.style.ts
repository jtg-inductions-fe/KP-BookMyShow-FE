import { AppBar, styled } from '@mui/material';

import { HEADER_HEIGHT } from '@constants';

export const StyledAppBar = styled(AppBar)(
    ({
        theme: {
            shadows,
            typography: { pxToRem },
            palette,
            zIndex,
            breakpoints,
        },
    }) => ({
        boxShadow: shadows[0],
        zIndex: zIndex.appBar,
        minHeight: pxToRem(HEADER_HEIGHT),
        backgroundColor: palette.background.paper,
        padding: `${pxToRem(12)} ${pxToRem(16)}`,

        [breakpoints.up('sm')]: {
            padding: `${pxToRem(12)} ${pxToRem(20)}`,
        },
    }),
);
