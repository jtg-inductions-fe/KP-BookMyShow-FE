import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const MainContent = styled(Box)(({ theme: { spacing } }) => ({
    height: '100%',
    overflow: 'auto',
    paddingTop: spacing(12),
}));
