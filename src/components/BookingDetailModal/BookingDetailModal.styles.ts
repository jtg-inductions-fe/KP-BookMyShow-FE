import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme: { palette } }) => ({
    border: '1px solid',
    borderColor: palette.primary.main,
}));
