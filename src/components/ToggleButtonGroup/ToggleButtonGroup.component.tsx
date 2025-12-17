import { useState } from 'react';

import { Typography } from 'components/Typography';

import { IconButton, useMediaQuery, useTheme } from '@mui/material';

import {
    StyledToggleButton,
    StyledToggleButtonGroup,
} from './ToggleButtonGroup.styles';
import { ToggleButtonGroupProps } from './ToggleButtonGroup.types';

/**
 * Renders a group of toggle buttons.
 *
 * @param {props} - The component props.
 */
export const ToggleButtonGroup = ({
    ToggleButtonItems,
}: ToggleButtonGroupProps) => {
    const [selected, setSelected] = useState('');
    const { breakpoints } = useTheme();

    const isTablet = useMediaQuery(breakpoints.up('md'));

    const handleChange = (_: unknown, newValue: string) => {
        if (newValue !== null) {
            setSelected(newValue);
        }
    };

    return (
        <StyledToggleButtonGroup
            value={selected}
            exclusive
            onChange={handleChange}
        >
            {ToggleButtonItems.map((toggleButtonItem) => (
                <StyledToggleButton
                    key={toggleButtonItem.label}
                    to={toggleButtonItem.url}
                >
                    {({ isActive }) => (
                        <>
                            {!isTablet && (
                                <Typography
                                    color={
                                        isActive
                                            ? 'textPrimary'
                                            : 'textDisabled'
                                    }
                                >
                                    <IconButton
                                        sx={{ padding: 0, margin: 0 }}
                                        color="inherit"
                                    >
                                        <toggleButtonItem.logo />
                                    </IconButton>
                                </Typography>
                            )}
                            {isTablet && (
                                <Typography
                                    fontWeight={450}
                                    color={
                                        isActive
                                            ? 'textPrimary'
                                            : 'textDisabled'
                                    }
                                >
                                    {toggleButtonItem.label}
                                </Typography>
                            )}
                        </>
                    )}
                </StyledToggleButton>
            ))}
        </StyledToggleButtonGroup>
    );
};
