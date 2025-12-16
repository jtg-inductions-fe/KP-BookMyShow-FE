import { Stack, styled } from '@mui/material';

export const MainContainer = styled(Stack)(({ theme: { spacing } }) => ({
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing(12),
    padding: `0 ${spacing(4)}`,
}));

export const OuterContainer = styled(Stack)(({ theme: { spacing } }) => ({
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing(6),
}));

export const InnerStack = styled(Stack)(({ theme: { spacing } }) => ({
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing(3),
}));
