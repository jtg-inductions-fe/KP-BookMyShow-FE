import { CardContent, CardMedia, styled } from '@mui/material';

export const StyledCardMedia = styled(CardMedia)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        aspectRatio: 0.85 / 0.95,
        objectFit: 'cover',
        minHeight: pxToRem(32),
        backgroundColor: '#38383846',
    }),
);

export const StyledCardContent = styled(CardContent)(
    ({ theme: { spacing } }) => ({
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        gap: spacing(1),
    }),
);
