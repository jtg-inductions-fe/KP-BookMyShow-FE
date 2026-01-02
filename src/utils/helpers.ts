import { Dispatch } from 'react';

import { SetURLSearchParams } from 'react-router-dom';

/**
 * A helper function which convert number to char, if it's greater than 26 it will keep appending the alphabets after it.
 * @param n the number which will convert in alphabet.
 * @returns A alphabet string.
 */
export const numberToChar = (n?: number): string | null => {
    let result = '';

    if (!n) return null;
    while (n > 0) {
        n--;
        result = String.fromCharCode((n % 26) + 65) + result;
        n = Math.floor(n / 26);
    }

    return result;
};

/**
 * A function which will checks the filter exists in `filterParams`.
 * @param filterParams A `URLSearchParams` which holds the current selected det of filter.
 * @param key filter
 * @param value filter value
 * @returns A boolean value.
 */
export const exists = (
    filterParams: URLSearchParams,
    key: string,
    value: string,
) => filterParams?.getAll(key).includes(value);

/**
 * A function which will use to set the filter.
 * @param filterParams A `URLSearchParams` which holds the current selected det of filter.
 * @param setFilterState A dispatcher which will update the value.
 * @param key filter
 * @param value filter value
 */
export const setFilter = (
    filterParams: URLSearchParams,
    setFilterState:
        | Dispatch<React.SetStateAction<URLSearchParams>>
        | SetURLSearchParams,
    key: string,
    value: string,
) => {
    const params = new URLSearchParams(filterParams);
    const values = params.getAll(key);
    if (values.length > 0) params.delete(key);
    if (values[0] !== value) params.append(key, value);
    setFilterState(params);
};
