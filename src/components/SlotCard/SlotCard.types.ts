import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

/**
 * Common interface for `slotCard` and `slotContainer`.
 */
export interface SlotCommonProps {
    onClick?: (id: bigint, slug: string) => void;
    Icon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
}

/**
 * Interface for `SlotCard` holding properties of the card.
 */
export interface SlotCardProps extends SlotCommonProps {
    title: string;
    slug: string;
    chipData: { key: bigint; value: string }[];
    isAuthenticated?: boolean;
}
