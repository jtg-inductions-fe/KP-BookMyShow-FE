import { useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import {
    Box,
    CircularProgress,
    Grid2,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Grid, Typography, VerticalCard } from '@components';
import { APP_ROUTES } from '@constants';
import { Filter } from '@containers';
import { useInfiniteScroll } from '@hooks';
import { MovieAdapter } from '@models';
import {
    useGetGenresQuery,
    useGetLanguagesQuery,
    useGetMoviesInfiniteQuery,
} from '@services';

/**
 * Movie list page holding features like filtering and showing all movies.
 */
export const MovieListPage = () => {
    const navigate = useNavigate();
    const { breakpoints } = useTheme();
    const isTablet = useMediaQuery(breakpoints.up('md'));
    const [searchParams, setSearchParams] = useSearchParams();

    const { data, fetchNextPage, isLoading, isFetching, hasNextPage, refetch } =
        useGetMoviesInfiniteQuery(searchParams.toString());
    const { data: languages } = useGetLanguagesQuery();
    const { data: genres } = useGetGenresQuery();

    const currentData = data?.pages.flatMap((movie) => movie.results);

    const endRef = useInfiniteScroll({
        hasNextPage: hasNextPage,
        isFetching,
        onLoadMore: fetchNextPage,
    });

    const handleClick = (slug: string) => {
        void navigate(`${APP_ROUTES.MOVIES}/${slug}`);
    };

    const toggleLanguage = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        const values = params.getAll(key);

        if (values.includes(value)) {
            params.delete(key, value);
        } else {
            params.append(key, value);
        }

        setSearchParams(params);
    };

    const exists = (key: string, value: string) =>
        searchParams.getAll(key).includes(value);

    useEffect(() => {
        void refetch();
    }, [refetch, searchParams]);

    return isLoading ? (
        <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <CircularProgress />
        </Box>
    ) : (
        <Grid2 container gap={5} flexDirection={isTablet ? 'row' : 'column'}>
            <Grid2 size={isTablet ? 3 : 12}>
                <Filter
                    filterData={[
                        {
                            label: 'languages',
                            filter: 'language',
                            data: languages,
                        },
                        {
                            label: 'genres',
                            filter: 'genre',
                            data: genres,
                        },
                    ]}
                    onClick={toggleLanguage}
                    onCheck={exists}
                />
            </Grid2>
            <Grid2 flex={1}>
                <Stack sx={{ gap: 5 }}>
                    <Typography variant="h2">Movies</Typography>
                    {currentData?.length ? (
                        <>
                            <Grid
                                renderNode={(movie) => (
                                    <VerticalCard
                                        data={new MovieAdapter(
                                            movie,
                                        ).adaptToVCard()}
                                        isLoading={isLoading}
                                        imgUrl={`https://picsum.photos/id/${movie.id}/900/900`}
                                        onClick={() => handleClick(movie.slug)}
                                    />
                                )}
                                gridItemsData={currentData}
                                gridColumns={{ xxs: 12, xs: 6, sm: 4 }}
                                spacing={{ xxs: 5, xs: 5, sm: 6 }}
                            />
                            <Box ref={endRef} style={{ height: 1 }} />
                        </>
                    ) : (
                        <Typography variant="h3" color="primary.main">
                            No movies available
                        </Typography>
                    )}
                </Stack>
            </Grid2>
        </Grid2>
    );
};
