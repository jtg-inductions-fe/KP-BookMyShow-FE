import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { DetailCardData } from '@components';

/**
 * Interface which give structure of the Transaction Detail. (e.g. booking price and number of seats)
 */
export interface Transaction {
    Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
    detail: string;
}

/**
 * Interface representing the structure of the `bookingModal`.
 */
export interface BookingDetailModalProps {
    open: boolean;
    onClose: () => void;
    detailCardData: Partial<DetailCardData>;
    handlePopOverButtonClick: () => Promise<void>;
    btnText: string;
    transactionDetail: Transaction[];
}
