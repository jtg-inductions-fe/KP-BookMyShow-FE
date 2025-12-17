export interface FilterOptions {
    label: string;
    filter: string;
    data?: string[];
}

export interface FilterProps {
    filterData: FilterOptions[];
    onClick: (key: string, value: string) => void;
    onCheck: (key: string, value: string) => boolean;
}
