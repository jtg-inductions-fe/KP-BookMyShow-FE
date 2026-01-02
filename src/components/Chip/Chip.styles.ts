import { Chip, styled } from '@mui/material';

export const StyledChip = styled(Chip)(({ theme: { spacing } }) => ({
    borderRadius: spacing(3),
    width: 'fit-content',
    ['&:focus-visible']: {
        border: '1px solid white',
    },
}));
