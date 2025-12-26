import { BookingHistory, Profile } from '@containers';

import { MainContainer } from './profile.styles';

/**
 * A page which render the user `Profile` and `Booking History` container.
 * @returns A rendered user profile page.
 */
export const ProfilePage = () => (
    <MainContainer>
        <Profile />
        <BookingHistory />
    </MainContainer>
);
