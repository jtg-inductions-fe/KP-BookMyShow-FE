import { SignupRequest } from 'services/auth/auth.types';

import { ConfigType } from '@containers';

export const Config: ConfigType<SignupRequest> = {
    heading: 'Login',
    fields: [
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
        message: 'Don’t Have An Account?',
        to: 'Signup',
        url: '/signup',
    },
};
