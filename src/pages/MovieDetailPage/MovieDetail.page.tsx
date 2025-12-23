import { Navigate, useParams } from 'react-router-dom';

import { DetailCard, DetailCardSkeleton } from '@components';
import { APP_ROUTES } from '@constants';
import { MovieAdapter } from '@models';
import { useGetMovieDetailsQuery } from '@services';

/**
 * The container for movie details handel logic of API calling
 * and manage loading and data state.
 * @returns a Detail card of the movie data.
 */
export const MovieDetailPage = () => {
    const { slug } = useParams();

    const { data, isLoading } = useGetMovieDetailsQuery({ slug: slug! });
    return isLoading ? (
        <DetailCardSkeleton />
    ) : data === undefined ? (
        <Navigate to={APP_ROUTES.NOTFOUND} replace={true} />
    ) : (
        <DetailCard
            data={new MovieAdapter(data).adaptToDCard()}
            imgUrl={`https://picsum.photos/id/${data.id}/900/900`}
            btnText="Book Now"
        />
    );
};
