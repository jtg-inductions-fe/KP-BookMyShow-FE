import dayjs from 'dayjs';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { MovieCreation } from '@mui/icons-material';
import { Box } from '@mui/material';

import { DetailCard, Typography } from '@components';
import { SlotContainer } from '@containers';
import { CinemaAdapter, CinemaMovieSlotAdapter } from '@models';
import {
    CinemaMovieSlot,
    useGetCinemaDetailsQuery,
    useGetCinemaMovieSlotsQuery,
} from '@services';

/**
 * A page rendering a information of cinema and it's all movies and their slots.
 * Handling the logic of calling API and handle the data.
 * Utilizing `SlotContainer` and passing movie information in the children.
 * @returns A page holding information and action related to `CinemaMovieSlotPage`.
 */
export const CinemaMovieSlotPage = () => {
    const { slug } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const { data } = useGetCinemaMovieSlotsQuery({
        slug: slug!,
        date: searchParams.get('date') || dayjs().format('YYYY-MM-DD'),
    });

    const navigate = useNavigate();
    const { data: cinema, isLoading } = useGetCinemaDetailsQuery({
        slug: slug!,
    });

    const CinemaMovieAdapter = (slotData: CinemaMovieSlot) =>
        new CinemaMovieSlotAdapter(slotData).adaptToSlotCard();

    const onClick = (id: number) => {
        void navigate(`${Number(id)}`);
    };

    const onDateChange = (value: string) => {
        setSearchParams({ date: value }, { replace: true });
    };

    return (
        <Box py={10}>
            <SlotContainer<CinemaMovieSlot>
                data={data}
                adapter={CinemaMovieAdapter}
                onClick={onClick}
                Icon={MovieCreation}
                onDateChange={onDateChange}
            >
                {cinema ? (
                    <DetailCard
                        data={new CinemaAdapter(cinema).adaptToDCard()}
                        isLoading={isLoading}
                    />
                ) : (
                    <Typography variant="h3" color="primary.main">
                        No cinema available
                    </Typography>
                )}
            </SlotContainer>
        </Box>
    );
};
