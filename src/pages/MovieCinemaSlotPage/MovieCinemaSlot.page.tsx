import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { Theaters } from '@mui/icons-material';
import { Box } from '@mui/material';

import { DetailCard, Typography } from '@components';
import { SlotContainer } from '@containers';
import { MovieAdapter, MovieCinemaSlotAdapter } from '@models';
import {
    MovieCinemaSlot,
    useGetMovieCinemaSlotsQuery,
    useGetMovieDetailsQuery,
} from '@services';

/**
 * A page rendering a information of movie and it's all cinema and their slots.
 * Handling the logic of calling API and handle the data.
 * Utilizing `SlotContainer` and passing movie information in the children.
 * @returns A page holding information and action related to `MovieCinemaSlotPage`.
 */
export const MovieCinemaSlotPage = () => {
    const { slug } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const { data } = useGetMovieCinemaSlotsQuery({
        slug: slug!,
        date: searchParams.get('date'),
    });

    const navigate = useNavigate();
    const { data: movie, isLoading } = useGetMovieDetailsQuery({ slug: slug! });

    const MovieCinemaAdapter = (slotData: MovieCinemaSlot) =>
        new MovieCinemaSlotAdapter(slotData).adaptToSlotCard();

    const onClick = (id: bigint, pathSlug: string) => {
        void navigate(`${Number(id)} ${pathSlug}`);
    };

    const onDateChange = (value: string) => {
        setSearchParams({ date: value }, { replace: true });
    };

    return (
        <Box paddingTop={10} paddingBottom={10}>
            <SlotContainer<MovieCinemaSlot>
                data={data}
                adapter={MovieCinemaAdapter}
                onClick={onClick}
                Icon={Theaters}
                onDateChange={onDateChange}
            >
                {movie ? (
                    <DetailCard
                        data={new MovieAdapter(movie).adaptToDCard()}
                        isLoading={isLoading}
                    />
                ) : (
                    <Typography variant="h3">No movie available</Typography>
                )}
            </SlotContainer>
        </Box>
    );
};
