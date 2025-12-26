import { paperClasses, Popover, styled } from '@mui/material';

export const StyledPopOver = styled(Popover)(
    ({ theme: { spacing, palette } }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [`& .${paperClasses.root}`]: {
            padding: spacing(10),
            backgroundColor: palette.background.default,
            borderRadius: spacing(3),
            border: '1px solid',
            borderColor: palette.primary.main,
            width: 400,
        },
    }),
);
