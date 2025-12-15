import { useState } from 'react';

import { Box, Button, useMediaQuery, useTheme } from '@mui/material';

import { Typography } from '@components';
import { TEXT_EXPANDING_THRESHOLD } from '@constants';

import {
    DetailsContainer,
    Gradient1,
    Gradient2,
    ImgContainer,
    LowerContainer,
    MainContainer,
    UpperContainer,
} from './DetailCard.styles';
import { DetailCardProps } from './DetailCard.types';

export const DetailCard = ({ data, imgUrl, btnText }: DetailCardProps) => {
    const { breakpoints } = useTheme();
    const isTablet = useMediaQuery(breakpoints.up('md'));
    const [isExpanded, setExpanded] = useState(false);
    return (
        <MainContainer>
            <Gradient1 />
            <Gradient2 />
            <Box
                width={isTablet ? 400 : '100%'}
                height={isTablet ? 450 : 400}
                borderRadius={30}
            >
                <ImgContainer src={imgUrl} />
            </Box>
            <DetailsContainer>
                <UpperContainer>
                    <Typography variant="h4" color="primary.light" lines={1}>
                        {data.subtitle1}
                    </Typography>
                    <Typography fontSize={30} lines={1}>
                        {data.title}
                    </Typography>
                </UpperContainer>
                <LowerContainer>
                    <Box>
                        <Typography
                            color="text.secondary"
                            lines={isExpanded ? undefined : 3}
                        >
                            {data.description}
                        </Typography>
                        {data.description.length > TEXT_EXPANDING_THRESHOLD && (
                            <Typography
                                sx={{
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                variant="caption"
                                component={'span'}
                                color="primary.main"
                                onClick={() => setExpanded(!isExpanded)}
                            >
                                {isExpanded ? 'show less' : 'show more'}
                            </Typography>
                        )}
                    </Box>
                    <Typography lines={1}>{data.subtitle2}</Typography>
                    <Typography lines={1}>{data.extraInfo}</Typography>
                </LowerContainer>
                <Button variant="contained">{btnText}</Button>
            </DetailsContainer>
        </MainContainer>
    );
};
