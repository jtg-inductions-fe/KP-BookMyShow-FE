import { Button, Stack } from '@mui/material';

import { Chip } from '@components';

import { SeatGrid } from './Seats.styles';
import { SeatsProps } from './Seats.types';

/**
 * A component for rendering seat grid.
 * @param props takes the data, state, functions for the seat selection and
 * deselection logic.
 * @returns A rendered Grid with chip making a structure of cinema seats.
 */
export const Seats = (props: SeatsProps) => {
    const { state, data, size, handleSeatClick, handleButtonClick } = props;

    return (
        <Stack gap={10}>
            <SeatGrid
                sx={{
                    gridTemplateColumns: `repeat(${data?.seatsPerRow}, ${size}px)`,
                }}
            >
                {data?.seats.map((seat, index) => (
                    <Chip
                        label=""
                        key={index}
                        variant={
                            state.find((item) => item.id == seat.id) ||
                            !seat.available
                                ? 'filled'
                                : 'outlined'
                        }
                        onClick={() => {
                            handleSeatClick({
                                id: Number(seat.id),
                                row: seat.row_number,
                                column: seat.seat_number,
                            });
                        }}
                        color={seat.available ? 'primary' : 'secondary'}
                        disabled={!seat.available}
                        sx={{
                            width: size,
                            height: size,
                            borderRadius: 1,
                            flexShrink: 0,
                        }}
                    />
                ))}
            </SeatGrid>
            <Button
                variant="outlined"
                sx={{ margin: 'auto' }}
                onClick={() => handleButtonClick()}
            >
                Book Seat
            </Button>
        </Stack>
    );
};
