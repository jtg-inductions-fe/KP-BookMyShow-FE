import { Close, Edit } from '@mui/icons-material';
import {
    IconButton,
    InputAdornment,
    InputLabel,
    Stack,
    useTheme,
} from '@mui/material';

import { StyledTextField } from './EditableTextField.styles';
import { EditableTextFieldProps } from './EditableTextField.types';

/**
 * A component for EditText with Toggle edit button.
 * @param props A props for the TextFIeld (e.g. title, state, etc.)
 * @returns A rendered EditText component with toggle.
 */
export const EditableTextField = (props: EditableTextFieldProps) => {
    const { title, editFields, setEditFields, ...MuiTextFieldProps } = props;
    const { typography } = useTheme();
    return (
        <Stack gap={2}>
            <InputLabel
                htmlFor={title}
                sx={{
                    ...typography.subtitle1,
                    color: 'text.primary',
                }}
            >
                {title}
            </InputLabel>
            <StyledTextField
                id={title}
                aria-labelledby={title}
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
                                    color="primary"
                                >
                                    {!editFields[title] ? <Edit /> : <Close />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Stack>
    );
};
