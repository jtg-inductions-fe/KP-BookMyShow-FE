import { Box, Grid2, Stack, styled } from '@mui/material';

export const MainContainer = styled(Grid2)(
    ({ theme: { spacing, breakpoints } }) => ({
        position: 'relative',
        padding: 0,
        gap: spacing(5),
        [breakpoints.up('md')]: {
            gap: spacing(10),
        },
    }),
);

export const ImgContainer = styled('img')(
    ({ theme: { breakpoints, spacing, palette } }) => ({
        width: '100%',
        height: '100%',
        borderRadius: spacing(5),
        aspectRatio: 2 / 3,
        objectFit: 'cover',
        minHeight: spacing(10),
        backgroundColor: palette.action.hover,

        [breakpoints.up('md')]: {
            aspectRatio: 2.3 / 3,
        },
    }),
);

export const DetailsContainer = styled(Stack)(({ theme: { spacing } }) => ({
    flexDirection: 'column',
    gap: spacing(7),
    alignItems: 'start',
}));

export const UpperContainer = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(1),
    alignItems: 'start',
}));

export const LowerContainer = styled(Stack)(
    ({ theme: { spacing, breakpoints } }) => ({
        flexDirection: 'column',
        gap: spacing(3),
        alignItems: 'start',
        width: '100%',

        [breakpoints.up('md')]: {
            width: '80%',
        },
    }),
);

export const Gradient1 = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        zIndex: -1,
        width: pxToRem(600),
        height: pxToRem(300),
        borderRadius: '50%',
        background:
            'radial-gradient(circle, #f845662d 0%, rgba(0, 0, 0, 0.34) 100%)',
        filter: 'blur(60px)',
        position: 'absolute',
    }),
);

export const Gradient2 = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        zIndex: -1,
        width: pxToRem(600),
        height: pxToRem(300),
        borderRadius: '50%',
        bottom: 10,
        right: 80,
        background:
            'radial-gradient(circle, #f8456623 0%, rgba(0, 0, 0, 0.18) 100%)',
        filter: 'blur(60px)',
        position: 'absolute',
    }),
);

export const SkeletonImg = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
            breakpoints,
        },
    }) => ({
        width: '100%',
        height: pxToRem(400),
        borderRadius: pxToRem(30),
        padding: 0,
        margin: 0,
        [breakpoints.up('md')]: {
            width: pxToRem(400),
            height: pxToRem(450),
        },
    }),
);

export const SkeletonUpperContainer = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(1),
    alignItems: 'start',
    width: '100%',
}));

export const SkeletonLowerContainer = styled(Stack)(
    ({ theme: { spacing, breakpoints } }) => ({
        flexDirection: 'column',
        gap: spacing(3),
        alignItems: 'start',
        width: '100%',

        [breakpoints.up('md')]: {
            width: '80%',
        },
    }),
);
