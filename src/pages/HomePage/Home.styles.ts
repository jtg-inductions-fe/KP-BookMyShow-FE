import { Box, Stack, styled } from '@mui/material';

export const HomeContainer = styled(Stack)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(15),
    paddingBottom: spacing(10),
}));

export const BottomGradient = styled(Box)(
    ({ theme: { spacing, breakpoints } }) => ({
        position: 'absolute',
        bottom: '-1px',
        left: 0,
        width: '100%',
        height: spacing(15),
        pointerEvents: 'none',
        zIndex: 1,
        background: `
        linear-gradient(
          to bottom,
          rgba(9,9,11,0) 0%,
          rgba(9,9,11,0.7) 60%,
          #09090B 100%
        )
      `,
        [breakpoints.up('xs')]: {
            height: spacing(25),
        },
        [breakpoints.up('sm')]: {
            height: spacing(50),
        },

        [breakpoints.up('md')]: {
            height: spacing(100),
        },
        [breakpoints.up('lg')]: {
            height: spacing(150),
        },
    }),
);
