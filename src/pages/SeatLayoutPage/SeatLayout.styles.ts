import { Box, Button, Stack, styled } from '@mui/material';

import { CONTAINER_MAX_WIDTH } from '@constants';

export const MainContainer = styled(Box)({
    overflowX: 'auto',
    width: '100%',
    height: '100%',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
});

export const InnerContainer = styled(Box)({
    minWidth: CONTAINER_MAX_WIDTH,
    flexShrink: 0,
    position: 'relative',
});

export const MainLayout = styled(Stack)(({ theme: { spacing } }) => ({
    alignItems: 'center',
    gap: spacing(40),
}));

export const ScreenWrapper = styled(Stack)(({ theme: { spacing } }) => ({
    alignItems: 'center',
    gap: spacing(4),
    width: '100%',
}));

export const StyledButton = styled(Button)(({ theme: { palette } }) => ({
    border: '1px solid',
    borderColor: palette.primary.main,
}));
