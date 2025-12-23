import { Grid2, Skeleton } from '@mui/material';

import {
    MainContainer,
    SkeletonImg,
    SkeletonLowerContainer,
    SkeletonUpperContainer,
} from './DetailCard.styles';

/**
 * Skeleton for the detail section of the Detail card.
 * @returns A Skeleton for handling loading state of card details.
 */
export const DetailsSkeleton = () => (
    <>
        <SkeletonUpperContainer>
            <Skeleton variant="text" width={'50%'} />
            <Skeleton variant="text" width={'50%'} />
        </SkeletonUpperContainer>
        <SkeletonLowerContainer>
            <Skeleton variant="text" width={'70%'} height={80} />
            <Skeleton variant="text" width={'40%'} />
            <Skeleton variant="text" width={'15%'} height={70} />
        </SkeletonLowerContainer>
    </>
);

/**
 * Skeleton for the image section of the Detail card.
 * @returns A Skeleton for handling loading state of card image.
 */
export const ImgSkeleton = () => (
    <SkeletonImg>
        <Skeleton
            sx={{ borderRadius: 5 }}
            variant="rectangular"
            height={'100%'}
            width={'auto'}
        />
    </SkeletonImg>
);

/**
 * A component which loads full skeleton for the DetailCard.
 * Used where the single detail card is loaded.
 * @returns A Skeleton for Detail Card component.
 */
export const DetailCardSkeleton = () => (
    <MainContainer container>
        <ImgSkeleton />
        <Grid2 flex={1}>
            <DetailsSkeleton />
        </Grid2>
    </MainContainer>
);
