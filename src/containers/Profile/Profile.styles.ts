import { Stack, styled } from '@mui/material';

export const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 0,
    gap: 20,
    alignItems: 'start',
});

export const EmailHolder = styled(Stack)(({ theme: { spacing } }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(2),
}));
