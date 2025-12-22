import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

/**
 * Common interface for `slotCard` and `slotContainer`.
 */
export interface SlotCommonProps {
    onClick?: (id: number) => void;
    Icon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
}

/**
 * Interface for `SlotCard` holding properties of the card.
 */
export interface SlotCardProps extends SlotCommonProps {
    title: string;
    slug: string;
    chipData: { key: number; value: string }[];
    isAuthenticated?: boolean;
}
