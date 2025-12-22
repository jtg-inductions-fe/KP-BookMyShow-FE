import { DetailCardData, SeatState } from '@components';
import { SeatLayout } from '@models';

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
                .map((seat) => `R${seat.row}-S${seat.column}`)
                .sort()
                .join(', '),
        } satisfies Partial<DetailCardData>;
    }
}
