import { Close, Edit } from '@mui/icons-material';
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';

import { StyledTextField } from './EditableTextField.styles';
import { EditableTextFieldProps } from './EditableTextField.types';

/**
 * A component for EditText with Toggle edit button.
 * @param props A props for the TextFIeld (e.g. title, state, etc.)
 * @returns A rendered EditText component with toggle.
 */
export const EditableTextField = (props: EditableTextFieldProps) => {
    const { title, editFields, setEditFields, ...MuiTextFieldProps } = props;

    return (
        <Stack gap={2}>
            <Typography variant="subtitle1" color="text.primary">
                {title}
            </Typography>
            <StyledTextField
                {...MuiTextFieldProps}
                disabled={!editFields[title]}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle edit mode"
                                    onClick={() => {
                                        setEditFields((prev) => ({
                                            ...prev,
                                            [title]: !prev[title],
                                        }));
                                    }}
                                    edge="end"
                                >
                                    {!editFields[title] ? (
                                        <Edit sx={{ color: 'primary.main' }} />
                                    ) : (
                                        <Close sx={{ color: 'primary.main' }} />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Stack>
    );
};
