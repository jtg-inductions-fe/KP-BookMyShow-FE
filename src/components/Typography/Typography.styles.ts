import { styled } from '@mui/material';

export const ShowMoreButton = styled('button')(
    ({ theme: { palette, spacing } }) => ({
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        color: palette.primary.main,
        fontFamily: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        textAlign: 'inherit',
        cursor: 'pointer',

        '&:focus': {
            outline: `1px solid ${palette.primary.main}`,
            outlineOffset: 1,
            borderRadius: spacing(1),
        },
    }),
);
