import { Stack, styled } from '@mui/material';

export const MainContainer = styled(Stack)(
    ({ theme: { spacing, breakpoints } }) => ({
        gap: spacing(10),
        paddingTop: spacing(5),
        flexDirection: 'column',
        width: '100%',

        [breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    }),
);
