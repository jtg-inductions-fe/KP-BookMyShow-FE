import { useState } from 'react';

import { Navigate, useParams } from 'react-router-dom';

import { ChairOutlined, CurrencyRupee } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';

import ScreenImg from '@assets/images/screen.svg';
import {
    BackgroundGradient,
    BackNavigation,
    BookingDetailModal,
    Loader,
    Seats,
    Typography,
} from '@components';
import { APP_ROUTES } from '@constants';
import { useSeatSelection } from '@hooks';
import { SeatLayoutAdapter } from '@models';
import { useGetSeatLayoutQuery } from '@services';

import {
    InnerContainer,
    MainContainer,
    MainLayout,
    ScreenWrapper,
} from './SeatLayout.styles';

/**
 * A page rendering seatLayout of the cinema representing the different components.
 * The component holds the logic of selecting seats and booking them.
 * @returns A SeatLayout page representing `movie`, `cinema`, `seatLayout`.
 */
export const SeatLayoutPage = () => {
    const { id } = useParams();

    const { data, isLoading } = useGetSeatLayoutQuery({ id: Number(id) });

    const [open, setOpen] = useState(false);
    const {
        state,
        handleSeatClick,
        handlePopoverButtonClick,
        handleButtonClick,
    } = useSeatSelection(id);

    if (isLoading) {
        return <Loader />;
    }

    if (!data) {
        return <Navigate to={APP_ROUTES.HOME} replace />;
    }

    const detailCardData = new SeatLayoutAdapter(data, state).adaptToDCard();

    const TransactionDetail = [
        {
            Icon: ChairOutlined,
            detail: `total seats: ${state.length}`,
        },
        {
            Icon: CurrencyRupee,
            detail: `total price: ${state.length * (data?.slotPrice ?? 0)}`,
        },
    ];

    const onButtonClick = () => {
        if (handleButtonClick()) {
            setOpen(!open);
        }
    };

    const handleModalClose = () => setOpen(false);

    return (
        <MainContainer>
            <InnerContainer>
                <BackgroundGradient sx={{ top: -10, left: 0 }} />
                <BackgroundGradient sx={{ bottom: -50, right: 150 }} />
                <Stack paddingTop={20} gap={10}>
                    <BackNavigation
                        title={data.movie}
                        subtitle1={`${data.cinema}, ${data.location}`}
                    />
                    <MainLayout>
                        <ScreenWrapper>
                            <Typography variant="h3">
                                Select Your Seat
                            </Typography>

                            <Box width={800}>
                                <Box
                                    component="img"
                                    src={ScreenImg}
                                    width="100%"
                                />
                            </Box>
                            <Typography variant="caption">
                                SCREEN SIDE
                            </Typography>
                        </ScreenWrapper>

                        <Seats
                            state={state}
                            data={data}
                            size={50}
                            handleSeatClick={handleSeatClick}
                            handleButtonClick={onButtonClick}
                        />
                    </MainLayout>
                </Stack>

                <BookingDetailModal
                    open={open}
                    handlePopOverButtonClick={handlePopoverButtonClick}
                    onClose={handleModalClose}
                    TransactionDetail={TransactionDetail}
                    btnText="Confirm Booking"
                    detailCardData={detailCardData}
                />
            </InnerContainer>
        </MainContainer>
    );
};
