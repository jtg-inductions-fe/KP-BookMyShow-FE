import { StyledAvatar } from './Avatar.style';
import { StyledAvatarProps } from './Avatar.types';

/**
 * Avatar container component.
 *
 * @param props Forwards all `StyledAvatarProps` to the styled avatar component.
 *
 * @returns The Avatar component.
 */
export const Avatar = (props: StyledAvatarProps) => <StyledAvatar {...props} />;
