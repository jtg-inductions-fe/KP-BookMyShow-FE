import { DetailCardData, SeatState } from '@components';
import { SeatLayout } from '@models';
import { numberToChar } from '@utils';

/**
 * Adapter class for seatLayout which give function to adapt layout data in multiple
 * component formats.
 */
export class SeatLayoutAdapter {
    private seatLayout: SeatLayout;
    private seatsState: SeatState[];

    constructor(obj: SeatLayout, selectedSeats: SeatState[]) {
        this.seatLayout = obj;
        this.seatsState = selectedSeats;
    }

    adaptToDCard() {
        return {
            title: this.seatLayout.movie,
            subtitle1: `${this.seatLayout.cinema}, ${this.seatLayout.location}`,
            description: this.seatsState
                .slice()
                .sort((a, b) => a.row - b.row || a.column - b.column)
                .map((seat) => `${numberToChar(seat.row)}${seat.column}`)
                .join(', '),
        } satisfies Partial<DetailCardData>;
    }
}
