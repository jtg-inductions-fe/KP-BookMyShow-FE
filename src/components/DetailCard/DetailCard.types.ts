/**
 * interface defining structure of Detail card.
 */
export interface DetailCardData {
    title: string;
    description: string;
    subtitle1: string;
    subtitle2: string;
    extraInfo: string;
}

/**
 * interface defining structure of Detail card props.
 */
export interface DetailCardProps {
    data: DetailCardData;
    imgUrl: string;
    btnText: string;
}
