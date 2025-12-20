import { Grid2, styled } from '@mui/material';

export const StyledGrid = styled(Grid2)(({ theme: { spacing, palette } }) => ({
    backgroundColor: palette.secondary.light,
    border: `1px solid ${palette.secondary.main}`,
    padding: spacing(8),
    borderRadius: spacing(1),
}));
