import { Grid2, styled } from '@mui/material';

export const MainContainer = styled(Grid2)(({ theme: { spacing } }) => ({
    gap: spacing(10),
    paddingTop: spacing(5),
    width: '100%',
}));
