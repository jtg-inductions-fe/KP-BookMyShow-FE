import { useNavigate } from 'react-router-dom';

import AuthImg from '@assets/images/auth_background.webp';
import SignupImg from '@assets/images/signup_image.webp';
import { APP_ROUTES } from '@constants';
import { AuthContainer } from '@containers';
import { showSnackbar } from '@features';
import { SignupRequest, useSignupMutation } from '@services';
import { useAppDispatch } from '@store';

import { Config } from './config';
import { OuterContainer, StyledImg } from './Signup.styles';

/**
 * `SignupPage` is a container which contains the logic of the `onSubmit`
 * and responsible for dispatch the messages to the redux store.
 *
 * @returns a container which holds background image and `AuthContainer`.
 */
export const SignupPage = () => {
    const [SignupUser] = useSignupMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSubmit = async (data: SignupRequest): Promise<void> => {
        try {
            await SignupUser(data).unwrap();
            dispatch(
                showSnackbar({
                    messages: ['Signup successful!'],
                    options: { variant: 'success' },
                }),
            );
            void navigate(APP_ROUTES.LOGIN, { replace: true });
        } catch (e) {
            const allErrors: string[] = [];
            const errorData = (e as { data: Record<string, string[]> }).data;
            Object.keys(errorData).forEach((fieldName) => {
                const messages = errorData[fieldName];

                messages.forEach((msg) => {
                    allErrors.push(msg);
                });
            });

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
                imgPath={SignupImg}
                formConfig={{ ...Config, onSubmit }}
            />
        </OuterContainer>
    );
};
