import { Path } from 'react-hook-form';

/**
 * `FieldConfig` interface
 *
 * Defines the structure of the field config.
 */
export interface FieldConfig<T> {
    name: Path<T>;
    placeholder: string;
    type: 'text' | 'tel' | 'email' | 'password';
    validation?: {
        required?: string;
        minLength?: { value: number; message: string };
        maxLength?: { value: number; message: string };
        pattern?: { value: RegExp; message: string };
    };
}

/**
 * `ConfigType` interface
 *
 * Defines the structure of the form config.
 */

export interface ConfigType<T> {
    heading: string;
    fields: FieldConfig<T>[];
    link: {
        message: string;
        to: string;
        url: string;
    };
}
