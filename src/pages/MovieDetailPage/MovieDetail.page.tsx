import dayjs from 'dayjs';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { Box, useMediaQuery, useTheme } from '@mui/material';

import { DetailCard, DetailCardSkeleton } from '@components';
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

    const onClick = () => {
        void navigate(`cinemas/?date=${dayjs().format('YYYY-MM-DD')}`);
    };

    if (isLoading)
        return (
            <Box
                sx={{
                    padding: isMobile ? `0 ${spacing(10)}` : 0,
                    paddingTop: isTablet ? 40 : 10,
                    paddingBottom: 10,
                }}
            >
                <DetailCardSkeleton />
            </Box>
        );

    if (!data) {
        return <Navigate to={APP_ROUTES.NOTFOUND} replace />;
    }
    const FormattedData = new MovieAdapter(data).adaptToDCard();

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
