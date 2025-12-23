/**
 * Define the structure of filter options.
 * For rendering the filter chips.
 */
export interface FilterOptions {
    label: string;
    filter: string;
    data?: string[];
}

/**
 * Define structure of the Filter container props.
 * holding the filterOptions Data and other operations.
 */
export interface FilterProps {
    filterData: FilterOptions[];
    onClick: (key: string, value: string) => void;
    onCheck: (key: string, value: string) => boolean;
}
