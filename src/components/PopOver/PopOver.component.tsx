import { PopoverProps } from '@mui/material';

import { StyledPopOver } from './PopOver.styles';

/**
 * A Styled PopOver component.
 * @param props Mui PopOverProps
 * @returns A styled `PopOver` according to app's theme.
 */
export const PopOver = (props: PopoverProps) => {
    const { children, ...PopOverProps } = props;
    return <StyledPopOver {...PopOverProps}>{children}</StyledPopOver>;
};
