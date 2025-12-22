import { useNavigate } from 'react-router-dom';

import { ArrowBackIosOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { DetailCard, DetailCardData } from '@components';

import { StyledStack } from './BackNavigation.styles';

/**
 * A component for back navigation in a page.
 * @param props A `DetailCardData` for reusing detailCard.
 * @returns A component having `BackArrow` and `details`.
 */
export const BackNavigation = (props: Partial<DetailCardData>) => {
    const navigate = useNavigate();
    return (
        <StyledStack>
            <IconButton onClick={() => void navigate(-1)}>
                <ArrowBackIosOutlined
                    fontSize="large"
                    color="primary"
                    sx={{ cursor: 'pointer' }}
                />
            </IconButton>

            <DetailCard
                data={{
                    ...props,
                }}
            />
        </StyledStack>
    );
};
