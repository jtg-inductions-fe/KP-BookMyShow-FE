import { useNavigate } from 'react-router-dom';

import { Grid2, Stack } from '@mui/material';

import { Chip, Grid, Typography } from '@components';
import { APP_ROUTES } from '@constants';

import { StyledGrid } from './SlotCard.styles';
import { SlotCardProps } from './SlotCard.types';

/**
 * A component for showing slot information (e.g: cinema | movie, slots timing, etc)
 * @param props
 * @returns A Grid containing the slot information.
 */
export const SlotCard = (props: SlotCardProps) => {
    const { title, chipData, onClick, Icon, isAuthenticated } = props;
    const navigate = useNavigate();
    return (
        <StyledGrid container spacing={4}>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <Stack flexDirection={'row'} alignContent={'center'} gap={2}>
                    {Icon && <Icon />}
                    <Typography variant="body1" lines={2}>
                        {title}
                    </Typography>
                </Stack>
            </Grid2>
            <Grid
                gridItemsData={chipData}
                spacing={3}
                size={{ xs: 12, md: 8 }}
                renderNode={(data) => (
                    <Chip
                        sx={{
                            borderRadius: 1,
                            border: 1,
                            borderLeft: 4,
                            borderColor: 'primary.main',
                            ['&:focus-visible']: {
                                border: '1px solid white',
                                borderLeft: 4,
                            },
                        }}
                        label={data.value}
                        onClick={() =>
                            isAuthenticated
                                ? onClick && onClick(data.key)
                                : void navigate(APP_ROUTES.LOGIN)
                        }
                    />
                )}
            />
        </StyledGrid>
    );
};
