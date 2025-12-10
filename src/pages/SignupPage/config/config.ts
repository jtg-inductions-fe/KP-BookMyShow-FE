import { SignupRequest } from 'services/auth/auth.types';

import { ConfigType } from '@containers';

export const Config: ConfigType<SignupRequest> = {
    heading: 'Create an account',
    fields: [
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
            name: 'email',
            placeholder: 'Email',
            type: 'email',
            validation: {
                required: 'Email is required',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                },
                maxLength: {
                    value: 254,
                    message: 'Email is too long',
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
        {
            placeholder: 'Password',
            name: 'password',
            type: 'password',
            validation: {
                required: 'Password is Required',
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{0,}$/,
                    message:
                        'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
                },
                minLength: {
                    value: 8,
                    message: 'Password must have 8 characters',
                },
            },
        },
    ],
    link: {
        message: 'Already have an account?',
        to: 'Login',
        url: '/login',
    },
};
