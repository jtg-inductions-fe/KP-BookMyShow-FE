import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Typography } from '@components';

import {
    DetailHolder,
    DetailsContainer,
    ImgContainer,
    LeftContainer,
    RightContainer,
} from './BookingDetailHolder.styles';
import { BookingDetailHolderProps } from './BookingDetailHolder.types';

export const BookingDetailHolder = (props: BookingDetailHolderProps) => {
    const { booking, onClick, imgUrl } = props;
    const { breakpoints } = useTheme();

    const isMobile = useMediaQuery(breakpoints.up('sm'));

    return (
        <DetailHolder
            key={booking.id}
            tabIndex={0}
            onClick={() => onClick && onClick(booking)}
        >
            {imgUrl && (
                <ImgContainer>
                    <Box
                        component={'img'}
                        src={imgUrl}
                        width={'100%'}
                        height={'100%'}
                        borderRadius={1}
                        aria-hidden
                    />
                </ImgContainer>
            )}
            <DetailsContainer>
                <LeftContainer>
                    <Stack>
                        <Typography
                            lines={1}
                            variant="caption"
                            color="primary.main"
                        >
                            {booking.cinema}
                        </Typography>
                        <Typography variant="h3" lines={2}>
                            {booking.movie}
                        </Typography>
                    </Stack>
                    <Typography variant="caption" lines={1}>
                        {`${booking.slotDate} ${booking.slotTime}`}
                    </Typography>
                </LeftContainer>

                <RightContainer>
                    <Typography variant="h2" lines={1}>
                        {booking.price}
                    </Typography>

                    <Stack alignItems={isMobile ? 'end' : 'start'}>
                        <Typography color="primary.main" lines={1}>
                            {booking.status}
                        </Typography>
                        <Typography lines={1}>{booking.seats}</Typography>
                    </Stack>
                </RightContainer>
            </DetailsContainer>
        </DetailHolder>
    );
};
