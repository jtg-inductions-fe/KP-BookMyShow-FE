import { FieldValues } from 'react-hook-form';

import { FormProps } from '@containers';

/**
 * `AuthProps` interface
 *
 * Defines the structure of props pass in AuthContainer.
 */
export interface AuthProps<T extends FieldValues> {
    imgPath: string;
    formConfig: FormProps<T>;
}
