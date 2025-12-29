import { Skeleton } from '@mui/material';

import {
    DetailsContainer,
    MainContainer,
    SkeletonImg,
    SkeletonLowerContainer,
    SkeletonUpperContainer,
} from './DetailCard.styles';

export const DetailCardSkeleton = () => (
    <MainContainer>
        <SkeletonImg>
            <Skeleton
                sx={{ borderRadius: 5 }}
                variant="rectangular"
                height={'100%'}
                width={'auto'}
            />
        </SkeletonImg>
        <DetailsContainer>
            <SkeletonUpperContainer>
                <Skeleton variant="text" width={'50%'} />
                <Skeleton variant="text" width={'50%'} />
            </SkeletonUpperContainer>
            <SkeletonLowerContainer>
                <Skeleton variant="text" width={'70%'} height={80} />
                <Skeleton variant="text" width={'40%'} />
                <Skeleton variant="text" width={'15%'} height={70} />
            </SkeletonLowerContainer>
            <Skeleton variant="rectangular" sx={{ borderRadius: 3 }} />
        </DetailsContainer>
    </MainContainer>
);
