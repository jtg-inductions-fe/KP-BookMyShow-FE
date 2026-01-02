import { useState } from 'react';

import { IconButton, useMediaQuery, useTheme } from '@mui/material';

import { Typography } from '@components';

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
                    aria-label={`${toggleButtonItem.label} button`}
                    key={toggleButtonItem.label}
                    to={toggleButtonItem.url}
                >
                    {({ isActive }) => (
                        <>
                            {!isTablet && (
                                <IconButton
                                    aria-label={`${toggleButtonItem.label} icon`}
                                    sx={{
                                        padding: 0,
                                        margin: 0,
                                        color: isActive
                                            ? 'text.primary'
                                            : 'text.disabled',
                                    }}
                                >
                                    <toggleButtonItem.logo />
                                </IconButton>
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
