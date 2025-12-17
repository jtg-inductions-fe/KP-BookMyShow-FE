import { Chip as MuiChip } from '@mui/material';

import { StyledChipProps } from './Chip.styles';

/**
 * Custom chip component with theme specific style.
 */
export const Chip = ({ label, ...props }: StyledChipProps) => (
    <MuiChip
        sx={{ borderRadius: 3, width: 'fit-content' }}
        label={label}
        clickable
        color="secondary"
        {...props}
    />
);
