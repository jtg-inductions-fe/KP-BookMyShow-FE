import { Button, Grid2, useMediaQuery, useTheme } from '@mui/material';

import { BackgroundGradient, Typography } from '@components';

import { DetailsSkeleton, ImgSkeleton } from './DetailCard.skeleton';
import {
    DetailsContainer,
    ImgContainer,
    LowerContainer,
    MainContainer,
    UpperContainer,
} from './DetailCard.styles';
import { DetailCardProps } from './DetailCard.types';

/**
 * A component for showing details of a object.
 * @param props receive the props type `DetailCardProps`.
 * @returns A Grid containing the object information.
 */
export const DetailCard = (props: DetailCardProps) => {
    const {
        data: { title, subtitle1, subtitle2, description, extraInfo },
        imgUrl,
        btnText,
        isLoading,
        onClick,
    } = props;
    const { breakpoints } = useTheme();
    const isTablet = useMediaQuery(breakpoints.up('md'));

    const isUpperContainer = !!title || !!subtitle1;
    const isLowerContainer = !!subtitle2 || !!description || !!extraInfo;

    return (
        <MainContainer container>
            <BackgroundGradient
                sx={{
                    top: imgUrl ? -100 : 0,
                    right: imgUrl ? 510 : 1000,
                }}
            />
            {imgUrl && <BackgroundGradient sx={{ bottom: 10, right: 80 }} />}
            {imgUrl &&
                (!isLoading ? (
                    <Grid2
                        width={isTablet ? 400 : '100%'}
                        height={isTablet ? 450 : 400}
                    >
                        <ImgContainer src={imgUrl} />
                    </Grid2>
                ) : (
                    <ImgSkeleton />
                ))}

            <Grid2 flex={1}>
                {!isLoading ? (
                    <DetailsContainer sx={{ paddingTop: imgUrl ? 4 : 0 }}>
                        {isUpperContainer && (
                            <UpperContainer>
                                {subtitle1 && (
                                    <Typography
                                        variant="h4"
                                        color="primary.light"
                                        lines={isTablet ? 1 : 2}
                                    >
                                        {subtitle1}
                                    </Typography>
                                )}
                                {title && (
                                    <Typography
                                        fontSize={30}
                                        lines={isTablet ? 1 : 2}
                                    >
                                        {title}
                                    </Typography>
                                )}
                            </UpperContainer>
                        )}
                        {isLowerContainer && (
                            <LowerContainer>
                                {description && (
                                    <Typography
                                        color="text.secondary"
                                        lines={3}
                                        hasShowMore
                                    >
                                        {description}
                                    </Typography>
                                )}

                                {subtitle2 && (
                                    <Typography lines={isTablet ? 1 : 2}>
                                        {subtitle2}
                                    </Typography>
                                )}
                                {extraInfo && (
                                    <Typography lines={isTablet ? 1 : 2}>
                                        {extraInfo}
                                    </Typography>
                                )}
                            </LowerContainer>
                        )}
                        {btnText && (
                            <Button variant="contained" onClick={onClick}>
                                {btnText}
                            </Button>
                        )}
                    </DetailsContainer>
                ) : (
                    <DetailsSkeleton />
                )}
            </Grid2>
        </MainContainer>
    );
};
