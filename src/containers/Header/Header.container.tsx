import { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import logo from '@assets/images/logo.svg';
import { Profile, ProfileProps, ToggleButtonGroup } from '@components';
import { APP_ROUTES } from '@constants';
import { setUser } from '@features';
import { useLazyProfileQuery } from '@services';
import { useAppDispatch, useAppSelector } from '@store';

import { ToggleButtonItemConfig } from './Header.config';
import {
    LeftContainer,
    MainContainer,
    RightContainer,
    StyledAppBar,
} from './Header.styles';

/**
 * Application header component.
 */
export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const { name } = useAppSelector((state) => state.user);

    const [trigger, { isLoading }] = useLazyProfileQuery();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await trigger().unwrap();
                dispatch(setUser(res));
            } catch {
                void navigate(APP_ROUTES.HOME, { replace: true });
            }
        };

        if (isAuthenticated) {
            void fetchUser();
        }
    }, [isAuthenticated, trigger, dispatch, navigate]);

    const goToLogin = () => {
        void navigate(APP_ROUTES.LOGIN);
    };

    const profileProps: ProfileProps = {
        isAuthenticated,
        nameInitial: name.charAt(0).toUpperCase(),
        btnLabel: 'Login',
        onCTAClick: goToLogin,
        isLoading,
    };

    return (
        <StyledAppBar>
            <MainContainer>
                <LeftContainer>
                    <Link to="/" aria-label="go to home">
                        <Box
                            height="100%"
                            component="img"
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                </LeftContainer>
                <RightContainer>
                    <ToggleButtonGroup
                        ToggleButtonItems={ToggleButtonItemConfig}
                    />
                    <Profile {...profileProps} />
                </RightContainer>
            </MainContainer>
        </StyledAppBar>
    );
};
