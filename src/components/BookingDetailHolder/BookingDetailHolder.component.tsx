import { CardActionArea, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Typography } from '@components';

import {
    DetailHolder,
    DetailsContainer,
    LeftContainer,
    RightContainer,
    StyledCard,
    StyledCardMedia,
} from './BookingDetailHolder.styles';
import { BookingDetailHolderProps } from './BookingDetailHolder.types';

export const BookingDetailHolder = (props: BookingDetailHolderProps) => {
    const { booking, onClick, imgUrl } = props;
    const { breakpoints } = useTheme();

    const isSmUp = useMediaQuery(breakpoints.up('xs'));

    return (
        <StyledCard>
            <CardActionArea onClick={() => onClick?.(booking)} disableRipple>
                <DetailHolder>
                    {imgUrl && (
                        <StyledCardMedia image={imgUrl} title={booking.movie} />
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
                            <Typography variant="h2" lines={1} maxWidth="100%">
                                {booking.price}
                            </Typography>

                            <Stack
                                alignItems={isSmUp ? 'end' : 'start'}
                                maxWidth="100%"
                            >
                                <Typography
                                    color="primary.main"
                                    lines={1}
                                    maxWidth="100%"
                                >
                                    {booking.status}
                                </Typography>
                                <Typography lines={1} maxWidth={'100%'}>
                                    {booking.seats}
                                </Typography>
                            </Stack>
                        </RightContainer>
                    </DetailsContainer>
                </DetailHolder>
            </CardActionArea>
        </StyledCard>
    );
};
