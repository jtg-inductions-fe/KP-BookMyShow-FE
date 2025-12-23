import { useEffect } from 'react';

import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '@mui/material';

import { SNACKBAR_DURATION } from '@constants';
import { clearSnackbar } from '@features';
import { RootState } from '@store';

/**
 * `SnackBarHandler` is responsible for showing multiple snackbar
 * it's take the array of messages from store and enqueue them.
 */
export const SnackBarHandler = () => {
    const { messages, options } = useSelector(
        (state: RootState) => state.snackbar,
    );

    const dispatch = useDispatch();

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
