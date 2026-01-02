import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';

import { Box, Stack, useTheme } from '@mui/material';

import { DatePicker, NoDataText, SlotCard } from '@components';
import { useAppSelector } from '@store';

import { SlotContainerProps } from './Slot.types';

/**
 * A generic 'slotContainer' which shows the information about whole page.
 * @param props
 * @returns A container holding information about object and it's slots.
 */
export const SlotContainer = <T,>(props: SlotContainerProps<T>) => {
    const { data, adapter, onClick, Icon, onDateChange, children } = props;

    const { breakpoints } = useTheme();

    const [searchParams] = useSearchParams();
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return (
        <Stack flexDirection={'column'} gap={20}>
            {children}
            <Box gap={3} display={'flex'} flexDirection={'column'}>
                <DatePicker
                    label="Slot Date"
                    desktopModeMediaQuery={breakpoints.up('md')}
                    disablePast
                    value={dayjs(
                        searchParams.get('date') ||
                            dayjs().format('YYYY-MM-DD'),
                    )}
                    format="YYYY-MM-DD"
                    onChange={(value) =>
                        onDateChange(dayjs(value).format('YYYY-MM-DD'))
                    }
                />
                {data?.length ? (
                    data?.map((slot, index) => (
                        <SlotCard
                            key={index}
                            {...adapter(slot)}
                            onClick={onClick}
                            Icon={Icon}
                            isAuthenticated={isAuthenticated}
                        />
                    ))
                ) : (
                    <NoDataText>No slots available</NoDataText>
                )}
            </Box>
        </Stack>
    );
};
