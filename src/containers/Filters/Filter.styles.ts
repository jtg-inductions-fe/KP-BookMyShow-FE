import { Swiper, SwiperSlide } from 'swiper/react';

import { styled } from '@mui/material';

export const FilterBox = styled(Swiper)(({ theme: { palette, spacing } }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: spacing(3),
    backgroundColor: '#f8456621',
    padding: spacing(2),
    border: `1px solid ${palette.secondary.main}`,
    overflowX: 'hidden',
    borderRadius: 3,
}));

export const StyledSwiperSlide = styled(SwiperSlide)({
    flexShrink: 'unset',
    width: 'fit-content',
});
