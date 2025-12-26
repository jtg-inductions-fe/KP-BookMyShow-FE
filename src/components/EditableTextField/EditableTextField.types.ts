import { TextFieldProps } from '@mui/material';

/**
 * Interface describing the structure of the EditableTextField.
 */
export type EditableTextFieldProps = {
    title: string;
    editFields: Record<string, boolean>;
    setEditFields: React.Dispatch<
        React.SetStateAction<Record<string, boolean>>
    >;
} & TextFieldProps;
