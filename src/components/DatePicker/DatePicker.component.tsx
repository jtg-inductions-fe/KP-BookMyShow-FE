import { svgIconClasses, useTheme } from '@mui/material';
import {
    DatePicker as MuiDatePicker,
    DatePickerProps,
    LocalizationProvider,
    pickersDayClasses,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

/**
 *  Wrapper on `MuiDatePicker` component with custom styles.
 * @param props props of Mui `DatePickerProps`
 * @returns A DatePicker component with custom theme.
 */
export const DatePicker = ({ ...props }: DatePickerProps) => {
    const { palette } = useTheme();
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiDatePicker
                {...props}
                sx={{
                    color: 'primary.main',
                    width: 'fit-content',
                }}
                slotProps={{
                    day: {
                        sx: {
                            [`&.${pickersDayClasses.root}`]: {
                                [`&.${pickersDayClasses.disabled}`]: {
                                    color: `${palette.secondary.light}`,
                                },
                            },
                        },
                    },
                    leftArrowIcon: {
                        sx: {
                            color: 'primary.main',
                        },
                    },
                    rightArrowIcon: {
                        sx: {
                            color: 'primary.main',
                        },
                    },
                    switchViewIcon: {
                        sx: {
                            color: 'primary.main',
                        },
                    },

                    actionBar: {
                        actions: ['cancel', 'today'],
                    },
                    textField: {
                        sx: {
                            width: 'fit-content',
                            [`& .${svgIconClasses.root}`]: {
                                color: 'primary.main',
                            },
                            '& fieldset': {
                                borderColor: 'secondary.main',
                            },
                        },
                    },
                }}
            />
        </LocalizationProvider>
    );
};
