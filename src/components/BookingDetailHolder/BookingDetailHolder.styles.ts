import { Box, Stack, styled } from '@mui/material';

export const DetailHolder = styled(Stack)(
    ({ theme: { palette, spacing, breakpoints } }) => ({
        gap: spacing(5),
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: palette.secondary.light,
        padding: spacing(3),
        border: `1px solid ${palette.secondary.main}`,
        borderRadius: spacing(1),

        [breakpoints.up('sm')]: {
            flexDirection: 'row',
        },

        '&:hover': {
            cursor: 'pointer',
            filter: 'brightness(0.90)',
        },
    }),
);

export const ImgContainer = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
            breakpoints,
        },
    }) => ({
        width: '100%',
        height: '30%',

        [breakpoints.up('sm')]: {
            width: pxToRem(120),
            height: pxToRem(120),
        },
    }),
);

export const DetailsContainer = styled(Stack)(
    ({ theme: { breakpoints, spacing } }) => ({
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        gap: spacing(5),
        paddingTop: spacing(1),
        paddingBottom: spacing(1),
        [breakpoints.up('sm')]: {
            flexDirection: 'row',
            gap: 0,
        },
    }),
);

export const LeftContainer = styled(Stack)({
    justifyContent: 'space-between',
    height: '100%',
});

export const RightContainer = styled(Stack)(({ theme: { breakpoints } }) => ({
    justifyContent: 'space-between',
    alignItems: 'start',
    maxWidth: '30%',
    [breakpoints.up('sm')]: {
        alignItems: 'end',
        maxWidth: '80%',
    },
}));
