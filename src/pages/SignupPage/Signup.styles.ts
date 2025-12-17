import { Box, BoxProps, styled } from '@mui/material';

export const OuterContainer = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: pxToRem(10),
    }),
);

export const StyledImg = styled('img')<BoxProps>({
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    opacity: '30%',
});
