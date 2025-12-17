import { FreeMode } from 'swiper/modules';

import { Box, capitalize, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Accordion, Chip, Grid, Typography } from '@components';

import { FilterBox, StyledSwiperSlide } from './Filter.styles';
import { FilterProps } from './FIlter.types';

/**
 * Filter container hold logic of loading filter chips
 * differently on different screen sizes.
 */
export const Filter = (props: FilterProps) => {
    const { filterData, onClick, onCheck } = props;
    const { breakpoints } = useTheme();
    const isTablet = useMediaQuery(breakpoints.up('md'));

    return (
        <Box>
            <Typography variant="h2">Filters</Typography>
            <Stack sx={{ paddingTop: 5, gap: 2 }}>
                {filterData.map(({ label, data, filter }, index) =>
                    isTablet ? (
                        <Accordion key={index} label={capitalize(label)}>
                            <Grid
                                renderNode={(value) => (
                                    <Chip
                                        key={index}
                                        label={value}
                                        variant={
                                            onCheck(filter, value)
                                                ? 'filled'
                                                : 'outlined'
                                        }
                                        onClick={() => {
                                            onClick(filter, value);
                                        }}
                                    />
                                )}
                                gridItemsData={data}
                                spacing={2}
                            />
                        </Accordion>
                    ) : (
                        <FilterBox
                            key={label}
                            slidesPerView={'auto'}
                            spaceBetween={10}
                            freeMode={true}
                            modules={[FreeMode]}
                            sx={{ width: '100%' }}
                        >
                            {data?.map((value, ind) => (
                                <StyledSwiperSlide key={ind}>
                                    <Chip
                                        key={ind}
                                        label={value}
                                        variant={
                                            onCheck(filter, value)
                                                ? 'filled'
                                                : 'outlined'
                                        }
                                        onClick={() => {
                                            onClick(filter, value);
                                        }}
                                    />
                                </StyledSwiperSlide>
                            ))}
                        </FilterBox>
                    ),
                )}
            </Stack>
        </Box>
    );
};
