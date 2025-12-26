import { Stack } from '@mui/material';

import { DetailCard, PopOver, Typography } from '@components';

import { StyledButton } from './BookingDetailModal.styles';
import { BookingDetailModalProps } from './BookingDetailModal.types';

/**
 * A component for showing Booking details and a call to action button.
 * @param BookingDetailModalProps Props which give structure to the Component.
 * @returns A rendered BookingDetailModal component.
 */
export const BookingDetailModal = (props: BookingDetailModalProps) => {
    const {
        open,
        onClose,
        TransactionDetail,
        detailCardData,
        btnText,
        handlePopOverButtonClick,
    } = props;

    return (
        <PopOver
            open={open}
            anchorReference={'none'}
            onClose={() => onClose()}
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
                    {btnText}
                </StyledButton>
            </Stack>
        </PopOver>
    );
};
