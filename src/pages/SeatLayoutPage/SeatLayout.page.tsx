import { useState } from 'react';

import { Navigate, useParams } from 'react-router-dom';

import { ChairOutlined, CurrencyRupee } from '@mui/icons-material';
import { Box, CircularProgress, Stack } from '@mui/material';

import ScreenImg from '@assets/images/screen.svg';
import {
    BackgroundGradient,
    BackNavigation,
    DetailCard,
    PopOver,
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
    StyledButton,
} from './SeatLayout.styles';
import { BookingDetailModalProps } from './SeatLayout.types';

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
        return (
            <Stack justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Stack>
        );
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
                    detailCardData={detailCardData}
                />
            </InnerContainer>
        </MainContainer>
    );
};

/**
 * A Modal which shows a information about the booking.
 * @param props includes variables and function require for modal.
 * @returns A PopOverComponent showing booking information.
 */
const BookingDetailModal = (props: BookingDetailModalProps) => {
    const {
        open,
        onClose,
        TransactionDetail,
        detailCardData,
        handlePopOverButtonClick,
    } = props;
    return (
        <PopOver
            open={open}
            anchorReference={'none'}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Stack gap={7}>
                <DetailCard data={detailCardData} />
                {TransactionDetail.map(({ Icon, detail }, index) => (
                    <Stack key={index} direction={'row'} gap={2}>
                        <Icon />
                        <Typography variant="h3" lines={2}>
                            {detail}
                        </Typography>
                    </Stack>
                ))}

                <StyledButton
                    variant="contained"
                    onClick={() => void handlePopOverButtonClick()}
                >
                    Confirm Booking
                </StyledButton>
            </Stack>
        </PopOver>
    );
};
