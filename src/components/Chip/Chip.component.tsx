import { StyledChip } from './Chip.styles';
import { StyledChipProps } from './Chip.types';

/**
 * Custom chip component with theme specific style.
 * @param StyledChipProps props for styled chip props.
 * @returns
 */
export const Chip = ({ label, ...props }: StyledChipProps) => (
    <StyledChip label={label} clickable color="secondary" {...props} />
);
