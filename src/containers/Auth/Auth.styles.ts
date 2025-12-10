import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const StyledBox = styled(Box)(
    ({
        theme: {
            breakpoints,
            typography: { pxToRem },
            shadows,
            palette,
        },
    }) => ({
        display: 'grid',
        overflow: 'hidden',
        width: 'fit-content',
        height: 'fit-content',
        alignItems: 'center',
        gridTemplateColumns: 'repeat(1,1fr)',
        background: palette.background.paper,
        borderRadius: pxToRem(20),
        boxShadow: shadows[0],
        padding: pxToRem(30),

        [breakpoints.up('md')]: {
            width: pxToRem(900),
            gridTemplateColumns: 'repeat(2,1fr)',
            padding: 0,
        },
    }),
);

export const StyledImg = styled('img')({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
});
