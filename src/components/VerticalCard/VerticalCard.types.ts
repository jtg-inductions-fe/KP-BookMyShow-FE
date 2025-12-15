/**
 * Interface representing the data structure for card.
 * including its title and two subtitles.
 */
export interface VerticalCardData {
    title: string;
    subtitle1: string;
    subtitle2: string;
}

/**
 * Props for the Card component.
 *
 * This interface defines the properties required for the Card component.
 */
export interface VerticalCardProps {
    data: VerticalCardData;
    isLoading: boolean;
    imgUrl: string;
    onClick: () => void;
}
