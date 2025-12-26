import dayjs from 'dayjs';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Box, Grid2, Stack, useMediaQuery, useTheme } from '@mui/material';

import {
    Grid,
    Loader,
    NoDataText,
    Typography,
    VerticalCard,
} from '@components';
import { APP_ROUTES } from '@constants';
import { Filter } from '@containers';
import { useInfiniteScroll } from '@hooks';
import { CinemaAdapter } from '@models';
import { useGetCinemasInfiniteQuery, useGetLocationsQuery } from '@services';
import { exists, setFilter } from '@utils';

/**
 * Cinema list page holding features like filtering and showing all cinemas.
 */
export const CinemaListPage = () => {
    const navigate = useNavigate();
    const { breakpoints } = useTheme();
    const isTablet = useMediaQuery(breakpoints.up('md'));
    const [searchParams, setSearchParams] = useSearchParams();

    const { data, fetchNextPage, isLoading, isFetching, hasNextPage } =
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

    return isLoading ? (
        <Loader />
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
                    onClick={(key, value) =>
                        setFilter(searchParams, setSearchParams, key, value)
                    }
                    onCheck={(key, value) => exists(searchParams, key, value)}
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
