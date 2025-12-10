import { ConfigType } from './config';

/**
 * `FormProps` interface
 *
 * Defines the structure of the props passed in Form.
 */
export interface FormProps<T> extends ConfigType<T> {
    onSubmit: (data: T) => Promise<void>;
}
