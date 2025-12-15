import { useNavigate } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { Grid, Swiper, Typography, VerticalCard } from '@components';
import { APP_ROUTES } from '@constants';
import { useInfiniteScroll } from '@hooks';
import { MovieAdapter } from '@models';
import { useGetLatestMoviesInfiniteQuery } from '@services';

import { slidesConfig } from './Home.config';
import { BottomGradient, HomeContainer } from './Home.styles';

/**
 * HomePage component that serves as the main landing page of the application.
 *
 * This component includes the main layout, a hero section, featured content,
 * and navigation to other sections of the app.
 */
export const HomePage = () => {
    const navigate = useNavigate();
    const { data, isLoading, fetchNextPage, isFetching, hasNextPage } =
        useGetLatestMoviesInfiniteQuery();

    const currentData = data?.pages.flatMap((movie) => movie.results);

    const endRef = useInfiniteScroll({
        hasNextPage: hasNextPage,
        isFetching,
        onLoadMore: fetchNextPage,
    });

    const handelClick = (slug: string) => {
        void navigate(`${APP_ROUTES.MOVIES}/${slug}`);
    };
    return (
        <HomeContainer>
            <Box sx={{ position: 'relative' }}>
                <Swiper slides={slidesConfig} delayTIme={3000} />
                <BottomGradient />
            </Box>
            <Stack sx={{ gap: currentData?.length ? 10 : 3 }}>
                <Typography variant="h2">Latest Movies</Typography>
                {currentData?.length ? (
                    <Grid
                        renderNode={(movie) => (
                            <VerticalCard
                                data={new MovieAdapter(movie).adaptToVCard()}
                                isLoading={isLoading}
                                imgUrl={`https://picsum.photos/id/${movie.id}/900/900`}
                                onClick={() => handelClick(movie.slug)}
                            />
                        )}
                        gridItemsData={currentData}
                    />
                ) : (
                    <Typography variant="body2" color="primary.main">
                        No latest movies available.
                    </Typography>
                )}
                <Box ref={endRef} style={{ height: 1 }} />
            </Stack>
        </HomeContainer>
    );
};
