import { Card, CardContent, CardMedia, Stack, styled } from '@mui/material';

export const DetailHolder = styled(Stack)(
    ({ theme: { palette, spacing, breakpoints } }) => ({
        gap: spacing(5),
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: palette.secondary.light,
        padding: spacing(3),
        border: `1px solid ${palette.secondary.main}`,
        borderRadius: spacing(1),
        maxWidth: '100%',

        [breakpoints.up('xs')]: {
            flexDirection: 'row',
        },

        '&:hover': {
            cursor: 'pointer',
            filter: 'brightness(0.90)',
        },
    }),
);

export const DetailsContainer = styled(CardContent)(
    ({ theme: { breakpoints, spacing } }) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        gap: spacing(5),
        paddingTop: spacing(1),
        paddingBottom: spacing(1),
        minWidth: 0,
        maxWidth: '100%',
        '&:last-child': {
            padding: 0,
        },
        [breakpoints.up('xs')]: {
            flexDirection: 'row',
            gap: 0,
        },
    }),
);

export const LeftContainer = styled(Stack)({
    justifyContent: 'space-between',
    height: '100%',
    maxWidth: '60%',
});

export const RightContainer = styled(Stack)(({ theme: { breakpoints } }) => ({
    justifyContent: 'space-between',
    alignItems: 'start',
    maxWidth: '30%',
    minWidth: 0,
    [breakpoints.up('xs')]: {
        alignItems: 'end',
        maxWidth: '50%',
    },
}));

export const StyledCard = styled(Card)({
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
});

export const StyledCardMedia = styled(CardMedia)(
    ({
        theme: {
            breakpoints,
            typography: { pxToRem },
            spacing,
        },
    }) => ({
        width: '100%',
        height: pxToRem(200),
        borderRadius: spacing(1),
        [breakpoints.up('xs')]: {
            display: 'none',
        },
        [breakpoints.up('md')]: {
            display: 'block',
            width: pxToRem(120),
            height: pxToRem(120),
        },
    }),
);
