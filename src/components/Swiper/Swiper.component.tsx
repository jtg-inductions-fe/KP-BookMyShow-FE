import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper as ImageSwiper, SwiperSlide } from 'swiper/react';

import { Box } from '@mui/material';

import { ImageSwiperProps } from './Swiper.types';

import 'swiper/css';

/**
 * Image swiper component that displays a sequence of slides.
 *
 * @param props - Props used to configure the swiper.
 * @returns A React element rendering the image swiper.
 */
export const Swiper = ({ slides, delayTime }: ImageSwiperProps) => (
    <ImageSwiper
        style={{ width: '100%', height: '100%' }}
        modules={[Navigation, Autoplay, A11y]}
        autoplay={{
            delay: delayTime,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }}
        loop={true}
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={1}
    >
        {slides.map((img) => (
            <SwiperSlide key={img} style={{ width: '100%', height: '100%' }}>
                <Box
                    sx={{
                        objectFit: 'cover',
                        width: '100%',
                        aspectRatio: 10 / 4,
                    }}
                    component="img"
                    src={img}
                    alt={`slide-${img}`}
                />
            </SwiperSlide>
        ))}
    </ImageSwiper>
);
