import { CardActionArea, Skeleton } from '@mui/material';
import Card from '@mui/material/Card';

import { Typography } from '@components';

import { VerticalCardProps } from './VerticalCard.types';
import { StyledCardContent, StyledCardMedia } from './VerticalCardCard.styles';

/**
 * A vertical card component for displaying details.
 *
 * @param props.data The data object that contains the movie's details.
 * @param props.isLoading Boolean flag indicating state of data.
 * @param props.imgUrl The URL of the image to be displayed on the card.
 *
 */
export const VerticalCard = ({
    data,
    isLoading,
    imgUrl,
    onClick,
}: VerticalCardProps) => (
    <Card
        sx={{
            borderRadius: 5,
        }}
    >
        <CardActionArea onClick={onClick}>
            {imgUrl && <StyledCardMedia image={imgUrl} />}
            <StyledCardContent>
                {isLoading ? (
                    <>
                        <Skeleton width={'40%'} />
                        <Skeleton width={'90%'} />
                        <Skeleton width={'90%'} />
                    </>
                ) : (
                    <>
                        {data.title && (
                            <Typography
                                lines={1}
                                color="text.primary"
                                variant="h3"
                            >
                                {data.title}
                            </Typography>
                        )}
                        {data.subtitle1 && (
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                lines={1}
                            >
                                {data.subtitle1}
                            </Typography>
                        )}
                        {data.subtitle2 && (
                            <Typography
                                lines={1}
                                variant="body1"
                                color="text.secondary"
                            >
                                {data.subtitle2}
                            </Typography>
                        )}
                    </>
                )}
            </StyledCardContent>
        </CardActionArea>
    </Card>
);
