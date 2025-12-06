import { DEFAULT_LOCALE } from '@constants';

import {
    DATE_FORMATTER_OPTIONS,
    STANDARD_CURRENCY_FORMAT_OPTIONS,
} from './formatters.util';

/**
 * Formats a number into indian currency.
 * @param num - The numeric value that needs formatting.
 * @param options - Optional formatting options, it defaults to `STANDARD_CURRENCY_FORMAT_OPTIONS`.
 * @returns A string with the number formatted
 */
export const numberFormatter = (
    num: number,
    locale: Intl.LocalesArgument = DEFAULT_LOCALE,
    options: Intl.NumberFormatOptions = STANDARD_CURRENCY_FORMAT_OPTIONS,
) => new Intl.NumberFormat(locale, options).format(num);

/**
 * Formats a given date string into a localized date string based on the specified locale and formatting options.
 *
 * @param date - The date string to be formatted.
 * @param locale - a culturally specific convention for presenting dates.
 * @param options - options for customizing date.
 * @returns A formatted date string.
 */
export const dateFormatter = (
    date: string,
    locale: Intl.LocalesArgument = DEFAULT_LOCALE,
    options: Intl.DateTimeFormatOptions = DATE_FORMATTER_OPTIONS,
) => {
    const dateObj = new Date(date);

    return new Intl.DateTimeFormat(locale, options).format(dateObj);
};
