import { FieldConfig } from '@containers';
import { User } from '@models';

/**
 * A config for the Profile form to render fields and give them validation.
 */
export const Config: FieldConfig<User>[] = [
    {
        name: 'name',
        placeholder: 'Name',
        type: 'text',
        validation: {
            required: 'Name is required',
            pattern: {
                value: /^\S.*[a-zA-Z\s]*$/,
                message: 'Invalid name.',
            },
            maxLength: {
                value: 70,
                message: 'Name is too long',
            },
        },
    },
    {
        name: 'phone_number',
        placeholder: 'Phone Number',
        type: 'tel',
        validation: {
            required: 'Phone number is required',
            pattern: {
                value: /^\d{10}$/,
                message: 'Invalid phone number',
            },
        },
    },
];
