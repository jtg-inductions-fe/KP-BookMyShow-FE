import { AppBarProps } from '@mui/material';

import { StyledAppBar } from './Appbar.style';

/**
 * A wrapper component around MUI's AppBar with custom styling.
 *
 * @param children The content to be rendered inside the AppBar.
 *
 * @returns A styled AppBar component containing the provided children.
 */
export const AppBar = ({ children }: AppBarProps) => (
    <StyledAppBar>{children}</StyledAppBar>
);
