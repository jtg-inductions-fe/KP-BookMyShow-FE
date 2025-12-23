import { SlotCardProps, SlotCommonProps } from '@components';

/**
 * A generic interface for slotContainer properties.
 */
export interface SlotContainerProps<T> extends SlotCommonProps {
    data: T[] | undefined;
    adapter: (data: T) => SlotCardProps;
    onDateChange: (value: string) => void;
    children: React.ReactNode;
}
