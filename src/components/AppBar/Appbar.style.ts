import { AppBar, styled } from '@mui/material';

// TODO: Height will need to be adjusted as the main section will be developed in upcoming PRs.
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
        backgroundColor: palette.background.paper,
        padding: `${pxToRem(12)} ${pxToRem(16)}`,

        [breakpoints.up('sm')]: {
            padding: `${pxToRem(12)} ${pxToRem(20)}`,
        },
    }),
);
