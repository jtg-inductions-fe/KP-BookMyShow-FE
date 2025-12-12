import { AppDispatch } from '@store';

export interface ProfileProps {
    isAuthenticated: boolean;
    nameInitial: string;
    onCTAClick: () => void;
    btnLabel: string;
    isLoading?: boolean;
    dispatch: AppDispatch;
}
