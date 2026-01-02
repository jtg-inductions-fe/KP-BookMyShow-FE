import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

import AuthImg from '@assets/images/auth_background.webp';
import LoginImg from '@assets/images/login_image.webp';
import { APP_ROUTES } from '@constants';
import { AuthContainer } from '@containers';
import { setAuthState, showSnackbar } from '@features';
import { LoginRequest, useLoginMutation } from '@services';
import { useAppDispatch } from '@store';

import { Config } from './config';
import { OuterContainer, StyledImg } from './Login.styles';

/**
 * `LoginPage` is a container which contains the logic of the `onSubmit`
 * and responsible for dispatch the messages to the redux store.
 *
 * @returns a container which holds background image and `AuthContainer`.
 */
export const LoginPage = () => {
    const [loginUser] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const onSubmit = async (data: LoginRequest): Promise<void> => {
        try {
            const response = await loginUser(data).unwrap();
            Cookies.set('refresh-token', response.refresh, {
                expires: Number(
                    import.meta.env.VITE_REFRESH_COOKIE_LIFETIME_IN_DAYS,
                ),
                secure: true,
                sameSite: 'strict',
            });

            Cookies.set('access-token', response.access, {
                expires:
                    Number(
                        import.meta.env.VITE_ACCESS_COOKIE_LIFETIME_IN_MINUTES,
                    ) /
                    (24 * 60),
                secure: true,
                sameSite: 'strict',
            });
            dispatch(setAuthState());

            dispatch(
                showSnackbar({
                    messages: ['Login successful!'],
                    options: { variant: 'success' },
                }),
            );
            if (location.key === 'default')
                void navigate(APP_ROUTES.HOME, { replace: true });
            else void navigate(-1);
        } catch (error) {
            const errorData = (error as { data: Record<string, string> }).data;
            dispatch(
                showSnackbar({
                    messages: Object.values(errorData).flat(),
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
