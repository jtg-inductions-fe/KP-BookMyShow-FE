import { useEffect } from 'react';

import dayjs from 'dayjs';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
    Box,
    CircularProgress,
    Grid2,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Grid, NoDataText, Typography, VerticalCard } from '@components';
import { APP_ROUTES } from '@constants';
import { Filter } from '@containers';
import { useInfiniteScroll } from '@hooks';
import { CinemaAdapter } from '@models';
import { useGetCinemasInfiniteQuery, useGetLocationsQuery } from '@services';

/**
 * Cinema list page holding features like filtering and showing all cinemas.
 */
export const CinemaListPage = () => {
    const navigate = useNavigate();
    const { breakpoints } = useTheme();
    const isTablet = useMediaQuery(breakpoints.up('md'));
    const [searchParams, setSearchParams] = useSearchParams();

    const { data, fetchNextPage, isLoading, isFetching, hasNextPage, refetch } =
        useGetCinemasInfiniteQuery(searchParams.toString());
    const { data: locations } = useGetLocationsQuery();

    const currentData = data?.pages.flatMap((cinema) => cinema.results);

    const endRef = useInfiniteScroll({
        hasNextPage: hasNextPage,
        isFetching,
        onLoadMore: fetchNextPage,
    });

    const handleClick = (slug: string) => {
        void navigate(
            `${slug}${APP_ROUTES.MOVIES}/?date=${dayjs().format('YYYY-MM-DD')}`,
        );
    };

    const toggleFilter = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        const values = params.getAll(key);

        if (values.length > 0) {
            params.delete(key);
        }

        if (values[0] !== value) params.append(key, value);

        setSearchParams(params);
    };

    const exists = (key: string, value: string) =>
        searchParams.getAll(key).includes(value);

    useEffect(() => {
        void refetch({ refetchCachedPages: false });
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
                            label: 'locations',
                            filter: 'location',
                            data: locations,
                        },
                    ]}
                    onClick={toggleFilter}
                    onCheck={exists}
                />
            </Grid2>
            <Grid2 flex={1}>
                <Stack sx={{ gap: 5 }}>
                    <Typography variant="h2">Cinemas</Typography>
                    {currentData?.length ? (
                        <>
                            <Grid
                                renderNode={(cinema) => (
                                    <VerticalCard
                                        data={new CinemaAdapter(
                                            cinema,
                                        ).adaptToVCard()}
                                        isLoading={isLoading}
                                        onClick={() => handleClick(cinema.slug)}
                                    />
                                )}
                                gridItemsData={currentData}
                                gridColumns={{ xxs: 12, xs: 6, sm: 4 }}
                                spacing={{ xxs: 5, xs: 5, sm: 6 }}
                            />
                            <Box ref={endRef} style={{ height: 1 }} />
                        </>
                    ) : (
                        <NoDataText text={'No cinemas available'} />
                    )}
                </Stack>
            </Grid2>
        </Grid2>
    );
};
