import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { SeatState } from '@components';
import { APP_ROUTES } from '@constants';
import { showSnackbar } from '@features';
import { useBookSeatsMutation } from '@services';
import { useAppDispatch } from '@store';

/**
 * A Hook for handling the booking and seat selection logic.
 * @param id A slot id for booking the seats.
 * @returns A whole functionality require for the booking with modal.
 */
export const useSeatSelection = (id?: string) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState<SeatState[]>([]);
    const [bookSeat] = useBookSeatsMutation();

    const handleSeatClick = (seat: SeatState) => {
        setState((prevState) => {
            const isSeatSelected = prevState.find(
                (item) => item.id === seat.id,
            );
            return isSeatSelected
                ? prevState.filter(
                      (selectedSeat) => selectedSeat.id !== seat.id,
                  )
                : [...prevState, seat];
        });
    };

    const handlePopoverButtonClick = async (): Promise<void> => {
        try {
            if (!id || isNaN(Number(id))) {
                return;
            }
            await bookSeat({
                id: Number(id),
                seats: state.map((seat) => seat.id),
            }).unwrap();
            void navigate(APP_ROUTES.HOME, { replace: true });
        } catch (error) {
            const allErrors: string[] = [];
            const errorData = (error as { data: Record<string, string> }).data;
            allErrors.push(errorData.detail);
            dispatch(
                showSnackbar({
                    messages: allErrors,
                    options: { variant: 'error' },
                }),
            );
        }
    };

    const handleButtonClick = () => {
        if (!state.length) {
            dispatch(
                showSnackbar({
                    messages: ['Please select a seat'],
                    options: { variant: 'default' },
                }),
            );
            return false;
        }
        return true;
    };

    return {
        state,
        handleSeatClick,
        handlePopoverButtonClick,
        handleButtonClick,
    };
};
