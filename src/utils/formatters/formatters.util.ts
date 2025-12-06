/**
 * Default format options for currency display in INR.
 * - Style is set to 'currency'.
 * - Currency is set to 'INR'.
 * - Uses standard notation for full numeric display.
 * - Maximum of 1 fraction digit in the currency amount.
 */
export const STANDARD_CURRENCY_FORMAT_OPTIONS = {
    style: 'currency',
    currency: 'INR',
    notation: 'standard',
    maximumFractionDigits: 2,
} satisfies Intl.NumberFormatOptions;

/**
 * Date formatting options.
 * - Displays day as a 2-digit number.
 * - Displays month as an abbreviated (3-letter) string.
 * - Displays the full year as a 4-digit number.
 */
export const DATE_FORMATTER_OPTIONS = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
} satisfies Intl.DateTimeFormatOptions;
