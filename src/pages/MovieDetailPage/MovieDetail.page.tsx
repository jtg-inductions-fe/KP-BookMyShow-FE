import { useEffect } from 'react';

import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, useMediaQuery, useTheme } from '@mui/material';

import { DetailCard } from '@components';
import { APP_ROUTES } from '@constants';
import { MovieAdapter } from '@models';
import { useGetMovieDetailsQuery } from '@services';

/**
 * The container for movie details handel logic of API calling
 * and manage loading and data state.
 * @returns a Detail card of the movie data.
 */
export const MovieDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const { data, isLoading } = useGetMovieDetailsQuery({ slug: slug! });
    const { breakpoints, spacing } = useTheme();
    const isTablet = useMediaQuery(breakpoints.up('md'));
    const isMobile = useMediaQuery(breakpoints.up('sm'));

    useEffect(() => {
        if (!isLoading && data == undefined) {
            void navigate(`${APP_ROUTES.NOTFOUND}`, { replace: true });
        }
    }, [data, isLoading]);

    const onClick = () => {
        void navigate(
            `cinemas/?date=${dayjs().format('YYYY-MM-DD').toString()}`,
        );
    };
    const FormattedData = new MovieAdapter(data!).adaptToDCard();

    if (FormattedData == null) return null;

    return (
        <Box
            sx={{
                padding: isMobile ? `0 ${spacing(10)}` : 0,
                paddingTop: isTablet ? 40 : 10,
                paddingBottom: 10,
            }}
        >
            <DetailCard
                data={FormattedData}
                imgUrl={`https://picsum.photos/id/${data?.id}/900/900`}
                btnText="Book Now"
                isLoading={isLoading}
                onClick={onClick}
            />
        </Box>
    );
};
