import { Stack, styled } from '@mui/material';

export const StyledStack = styled(Stack)(({ theme: { spacing } }) => ({
    width: '100%',
    flexDirection: 'row',
    gap: spacing(5),
}));
