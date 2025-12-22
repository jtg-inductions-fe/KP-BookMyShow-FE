import { Box, styled } from '@mui/material';

export const SeatGrid = styled(Box)(({ theme: { spacing } }) => ({
    display: 'grid',
    gap: spacing(3),
    width: 'fit-content',
}));
