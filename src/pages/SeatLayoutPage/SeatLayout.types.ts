import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { DetailCardData } from '@components';

/**
 * Interface representing the structure of the `bookingModal`.
 */
export interface BookingDetailModalProps {
    open: boolean;
    onClose: () => void;
    detailCardData: Partial<DetailCardData>;
    handlePopOverButtonClick: () => Promise<void>;
    TransactionDetail: {
        Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
        detail: string;
    }[];
}
