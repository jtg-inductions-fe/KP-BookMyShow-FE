import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header } from '@containers';

import { MainContent } from './Main.styles';

/**
 * `MainLayout` component that includes a Header and MainContent.
 *
 * Structure:
 * - `Header`: Renders the header.
 */
export const MainLayout = () => (
    <Box height="auto">
        <Header />
        <MainContent>
            <Outlet />
        </MainContent>
    </Box>
);
