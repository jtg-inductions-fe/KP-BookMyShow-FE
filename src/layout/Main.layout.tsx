import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { ErrorBoundary } from '@components';
import { ErrorPage } from '@pages';

import { MainContent } from './Main.styles';
import { MainLayoutProps } from './main.types';
/**
 * `MainLayout` component that includes a Header and MainContent.
 *
 * Structure:
 * - `Header`: Renders the header.
 */
export const MainLayout = ({ header }: MainLayoutProps) => (
    <Box height="100vh">
        <ErrorBoundary fallback={<ErrorPage />}>
            {header && header}
            <MainContent hasHeader={!!header}>
                <Outlet />
            </MainContent>
        </ErrorBoundary>
    </Box>
);
