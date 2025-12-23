import { useEffect } from 'react';

import { useSnackbar } from 'notistack';

import { useTheme } from '@mui/material';

import { SNACKBAR_DURATION } from '@constants';
import { clearSnackbar } from '@features';
import { useAppDispatch, useAppSelector } from '@store';

/**
 * `SnackBarHandler` is responsible for showing multiple snackbar
 * it's take the array of messages from store and enqueue them.
 */
export const SnackBarHandler = () => {
    const { messages, options } = useAppSelector((state) => state.snackbar);

    const dispatch = useAppDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const {
        typography: { pxToRem },
    } = useTheme();

    useEffect(() => {
        if (messages) {
            messages.forEach((message) => {
                enqueueSnackbar(message, {
                    variant: options?.variant,
                    autoHideDuration: SNACKBAR_DURATION,
                    style: {
                        fontSize: pxToRem(20),
                    },
                });
                dispatch(clearSnackbar());
            });
        }
    }, [messages, options, enqueueSnackbar, dispatch]);

    return null;
};
