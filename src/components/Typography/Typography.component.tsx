import { CustomTypography } from './Typography.styles';
import { CustomTypographyProps } from './Typography.types';

/**
 * Typography container which wrap the custom typography component.
 */
export const Typography = (props: CustomTypographyProps) => (
    <CustomTypography {...props}>{props.children}</CustomTypography>
);
