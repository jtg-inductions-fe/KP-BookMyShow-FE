import { SeatLayout } from '@models';

/**
 * Interface representing the state of seat in seatLayout.
 */
export interface SeatState {
    id: number;
    row: number;
    column: number;
}

/**
 * Interface for representing the props require for seat.
 */
export interface SeatsProps {
    state: SeatState[];
    data: SeatLayout;
    size: number;
    handleSeatClick: (seat: SeatState) => void;
    handleButtonClick: () => void;
}
