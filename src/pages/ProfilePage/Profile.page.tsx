import { Grid2 } from '@mui/material';

import { BookingHistory, Profile } from '@containers';

import { MainContainer } from './profile.styles';

/**
 * A page which render the user `Profile` and `Booking History` container.
 * @returns A rendered user profile page.
 */
export const ProfilePage = () => (
    <MainContainer container gap={1}>
        <Grid2 flex={1}>
            <Profile />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 9, lg: 9.5 }}>
            <BookingHistory />
        </Grid2>
    </MainContainer>
);
