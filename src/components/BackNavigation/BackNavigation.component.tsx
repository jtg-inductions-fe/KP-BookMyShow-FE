import { useNavigate } from 'react-router-dom';

import { ArrowBackIosOutlined } from '@mui/icons-material';
import { IconButton, svgIconClasses } from '@mui/material';

import { DetailCard, DetailCardData } from '@components';

import { StyledStack } from './BackNavigation.styles';

/**
 * A component for back navigation in a page.
 * @param props A `DetailCardData` for reusing detailCard.
 * @returns A component having `BackArrow` and `details`.
 */
export const BackNavigation = (data: Partial<DetailCardData>) => {
    const navigate = useNavigate();
    return (
        <StyledStack>
            <IconButton
                sx={{
                    [`&:focus-visible .${svgIconClasses.root}`]: {
                        color: 'white',
                    },
                }}
                onClick={() => void navigate(-1)}
                aria-label="back button"
            >
                <ArrowBackIosOutlined fontSize="large" color="primary" />
            </IconButton>

            <DetailCard data={data} />
        </StyledStack>
    );
};
