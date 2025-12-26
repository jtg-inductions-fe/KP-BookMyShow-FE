import { BookingStatus } from '@models';

/**
 * Define the structure of the bookingCard.
 * It's describe about the booking details.
 */
export interface BookingDetails {
    id: number;
    movie: string;
    cinema: string;
    slotDate: string;
    slotTime: string;
    totalSeats: number;
    price: string;
    seats: string;
    status: BookingStatus;
}

/**
 * Define the structure of the bookingDetailHolder component props.
 */
export interface BookingDetailHolderProps {
    booking: BookingDetails;
    imgUrl?: string;
    onClick?: (booking: BookingDetails) => void;
}
