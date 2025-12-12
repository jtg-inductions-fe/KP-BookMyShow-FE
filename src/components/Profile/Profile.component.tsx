import { useState } from 'react';

import { Button, Skeleton } from '@mui/material';

import { Avatar } from '@components';
import { getMenuOptions } from '@containers';

import { StyledMenu, StyledMenuItem } from './Profile.styles';
import { ProfileProps } from './Profile.types';

export const Profile = (props: ProfileProps) => {
    const {
        isAuthenticated,
        nameInitial,
        dispatch,
        onCTAClick,
        btnLabel,
        isLoading,
    } = props;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = getMenuOptions(handleClose, dispatch);

    return (
        <>
            {isAuthenticated ? (
                isLoading ? (
                    <Skeleton variant="circular" width={32} height={32} />
                ) : (
                    <Avatar
                        component="button"
                        size={40}
                        alt={`profile`}
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
