import {
    Box,
    inputBaseClasses,
    outlinedInputClasses,
    styled,
    TextField,
} from '@mui/material';

export const StyledTextField = styled(TextField)(
    ({
        theme: {
            typography: { pxToRem },
            breakpoints,
        },
    }) => ({
        maxWidth: pxToRem(300),

        [`& .${inputBaseClasses.input}`]: {
            color: 'black',
            background: 'white',
            borderRadius: pxToRem(10),
        },
        [`& .${outlinedInputClasses.root}`]: {
            borderRadius: pxToRem(10),
            background: 'white',
        },

        [breakpoints.up('md')]: {
            maxWidth: pxToRem(400),
        },
    }),
);

export const OuterContainer = styled(Box)(({ theme: { spacing } }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: spacing(4),
    padding: `${spacing(6)} 0`,
}));

export const StyledForm = styled('form')(
    ({
        theme: {
            breakpoints,
            typography: { pxToRem },
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: 0,
        gap: 20,

        [breakpoints.up('md')]: {
            padding: `0 ${pxToRem(50)}`,
        },
    }),
);
