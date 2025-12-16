import { Grid2, styled } from '@mui/material';

export const StyledGrid = styled(Grid2)(
    ({
        theme: {
            breakpoints,
            typography: { pxToRem },
            shadows,
            palette,
        },
    }) => ({
        overflow: 'hidden',
        width: 'fit-content',
        height: 'fit-content',
        alignItems: 'center',
        background: palette.background.paper,
        borderRadius: pxToRem(20),
        boxShadow: shadows[0],
        padding: pxToRem(30),

        [breakpoints.up('md')]: {
            width: pxToRem(900),
            padding: 0,
        },
    }),
);

export const StyledImg = styled('img')({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
});
