import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Skeleton } from '@mui/material';

import { Avatar } from '@components';
import { getMenuOptions } from '@containers';
import { useAppDispatch } from '@store';

import { StyledMenu, StyledMenuItem } from './Profile.styles';
import { ProfileProps } from './Profile.types';

/**
 * A Header profile component which shows the `Avatar` and `Menu options`.
 * @param props A props which provide structure to the profile component.
 * @returns A rendered profile component for header.
 */
export const Profile = (props: ProfileProps) => {
    const { isAuthenticated, nameInitial, onCTAClick, btnLabel, isLoading } =
        props;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = getMenuOptions(handleClose, dispatch, navigate);

    return (
        <>
            {isAuthenticated ? (
                isLoading ? (
                    <Skeleton variant="circular" width={40} height={40} />
                ) : (
                    <Avatar
                        component="button"
                        size={40}
                        alt="profile"
                        onClick={handleClick}
                    >
                        {nameInitial}
                    </Avatar>
                )
            ) : (
                <Button onClick={onCTAClick}>{btnLabel}</Button>
            )}
            {isAuthenticated && (
                <StyledMenu
                    id="profile-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    {menuItems.map((option) => (
                        <StyledMenuItem
                            key={option.label}
                            onClick={option.onClick}
                        >
                            {option.label}
                        </StyledMenuItem>
                    ))}
                </StyledMenu>
            )}
        </>
    );
};
