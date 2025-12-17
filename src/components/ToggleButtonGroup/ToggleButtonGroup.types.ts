import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

/**
 * Represents an individual toggle button item.
 *
 * @interface ToggleButtonItem
 * @property {handleClick} - Function to be called when the button is clicked.
 * @property {label} - The label text displayed on the button.
 * @property {logo} - The icon component to display on the button.
 */
export interface ToggleButtonItem {
    handleClick: () => void;
    label: string;
    url: string;
    logo: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
}

/**
 * Props for the ToggleButtonGroup component.
 *
 * @interface ToggleButtonGroupProps
 * @property {ToggleButtonItems} - Array of toggle button items to be rendered.
 */
export interface ToggleButtonGroupProps {
    ToggleButtonItems: ToggleButtonItem[];
}
