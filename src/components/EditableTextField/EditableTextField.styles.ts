import {
    inputBaseClasses,
    outlinedInputClasses,
    styled,
    TextField,
} from '@mui/material';

export const StyledTextField = styled(TextField)(
    ({ theme: { palette } }) =>
        ({
            theme: {
                typography: { pxToRem },
                breakpoints,
            },
        }) => ({
            maxWidth: pxToRem(300),

            [`& .${inputBaseClasses.input}`]: {
                color: 'primary.main',
                borderRadius: pxToRem(10),
            },
            [`& .${outlinedInputClasses.root}`]: {
                borderRadius: pxToRem(10),
                color: 'primary.main',
            },
            '& .MuiInputBase-root.Mui-disabled': {
                '& fieldset': {
                    borderColor: palette.secondary.main,
                },
            },
            '& input.Mui-disabled': {
                WebkitTextFillColor: 'white',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: palette.secondary.main,
                },

                '&:hover fieldset': {
                    borderColor: palette.primary.main,
                },
            },
            [breakpoints.up('md')]: {
                maxWidth: pxToRem(400),
            },
        }),
);
