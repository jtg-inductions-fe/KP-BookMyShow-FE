import { Avatar, styled } from '@mui/material';

import { StyledAvatarProps } from './Avatar.types';

export const StyledAvatar = styled(Avatar)<StyledAvatarProps>(
    ({
        size = 32,
        theme: {
            typography: { pxToRem },
            palette,
        },
    }) => ({
        height: pxToRem(size),
        width: pxToRem(size),
        background: palette.success.light,

        '&:hover': {
            cursor: 'pointer',
        },
    }),
);
