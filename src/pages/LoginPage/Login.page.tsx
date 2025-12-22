import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthImg from '@assets/images/auth_background.webp';
import LoginImg from '@assets/images/login_image.webp';
import { APP_ROUTES } from '@constants';
import { AuthContainer } from '@containers';
import { showSnackbar } from '@features';
import { LoginRequest, useLoginMutation } from '@services';
import { AppDispatch } from '@store';

import { Config } from './config';
import { COOKIE_LIFETIME_IN_DAYS } from './Login.constants';
import { OuterContainer, StyledImg } from './Login.styles';

/**
 * `LoginPage` is a container which contains the logic of the `onSubmit`
 * and responsible for dispatch the messages to the redux store.
 *
 * @returns a container which holds background image and `AuthContainer`.
 */
export const LoginPage = () => {
    const [loginUser] = useLoginMutation();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const onSubmit = async (data: LoginRequest): Promise<void> => {
        try {
            const response = await loginUser(data).unwrap();
            Cookies.set('refresh-token', response.refresh, {
                expires: COOKIE_LIFETIME_IN_DAYS,
                secure: true,
                sameSite: 'strict',
            });

            Cookies.set('access-token', response.access, {
                expires: COOKIE_LIFETIME_IN_DAYS,
                secure: true,
                sameSite: 'strict',
            });

            dispatch(
                showSnackbar({
                    messages: ['Login successful!'],
                    options: { variant: 'success' },
                }),
            );

            void navigate(APP_ROUTES.HOME, {
                replace: true,
            });
        } catch (error) {
            const allErrors: string[] = [];
            const errorData = (error as { data: Record<string, string> }).data;
            allErrors.push(errorData.detail);
            dispatch(
                showSnackbar({
                    messages: allErrors,
                    options: { variant: 'error' },
                }),
            );
        }
    };

    return (
        <OuterContainer>
            <StyledImg src={AuthImg} alt="side poster" aria-hidden={true} />
            <AuthContainer
                imgPath={LoginImg}
                formConfig={{ ...Config, onSubmit }}
            />
        </OuterContainer>
    );
};
