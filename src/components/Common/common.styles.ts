import { Box, styled } from '@mui/material';

export const Gradient = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        zIndex: -1,
        width: pxToRem(600),
        height: pxToRem(300),
        borderRadius: '50%',
        background:
            'radial-gradient(circle, #f845662d 0%, rgba(0, 0, 0, 0.34) 100%)',
        filter: 'blur(60px)',
        position: 'absolute',
    }),
);
