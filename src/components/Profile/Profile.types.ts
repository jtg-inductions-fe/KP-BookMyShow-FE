/**
 * Interface representing structure of profile component props.
 * Contains some essential props for rendering the component.
 */
export interface ProfileProps {
    isAuthenticated: boolean;
    nameInitial: string;
    onCTAClick: () => void;
    btnLabel: string;
    isLoading?: boolean;
}
