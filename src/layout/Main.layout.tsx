import { Outlet } from 'react-router-dom';

import { ErrorBoundary } from '@components';
import { ErrorPage } from '@pages';

import { MainContainer, MainContent } from './Main.styles';
import { MainLayoutProps } from './main.types';
/**
 * `MainLayout` component that includes a Header and MainContent.
 *
 * Structure:
 * - `Header`: Renders the header.
 */
export const MainLayout = ({ header }: MainLayoutProps) => (
    <MainContainer>
        <ErrorBoundary fallback={<ErrorPage />}>
            {header && header}
            <MainContent hasHeader={!!header}>
                <Outlet />
            </MainContent>
        </ErrorBoundary>
    </MainContainer>
);
