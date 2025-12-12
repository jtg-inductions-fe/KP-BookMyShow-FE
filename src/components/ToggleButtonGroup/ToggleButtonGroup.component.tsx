import { useState } from 'react';

import { useMediaQuery, useTheme } from '@mui/material';

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
        if (newValue != null) {
            setSelected(newValue);
        }
    };
    return (
        <StyledToggleButtonGroup
            value={selected}
            exclusive
            onChange={handleChange}
        >
            {ToggleButtonItems.map((toggleButtonItem, index) => (
                <StyledToggleButton
                    key={index}
                    value={toggleButtonItem.label}
                    onClick={toggleButtonItem.handleClick}
                >
                    {!isTablet && <toggleButtonItem.logo />}
                    {isTablet && toggleButtonItem.label}
                </StyledToggleButton>
            ))}
        </StyledToggleButtonGroup>
    );
};
