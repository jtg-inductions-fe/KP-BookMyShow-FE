import { Menu, MenuItem, styled } from '@mui/material';

export const StyledMenu = styled(Menu)(({ theme: { spacing } }) => ({
    margin: `${spacing(3)} 0`,
}));

export const StyledMenuItem = styled(MenuItem)(
    ({ theme: { spacing, palette } }) => ({
        borderRadius: spacing(2),

        '&:focus': {
            background: palette.secondary.light,
        },
    }),
);
