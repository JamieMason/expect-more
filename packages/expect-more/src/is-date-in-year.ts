import { isDate } from './is-date';
import { isNumber } from './is-number';
import { curry2 } from './lib/curry2';

/**
 * Asserts that a value is an instance of `Date` occurring in the given year.
 * @param year 2021
 * @param value new Date('2021-08-29')
 * @matcherName toBeDateInYear
 * @memberMatcherName toHaveDateInYear
 * @matcherMessage expected ${value} to be an instance of Date occurring in the
 * year ${year}
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in the year ${year}
 */
export const isDateInYear = curry2(
  (year: number, value: unknown): value is Date =>
    isDate(value) && isNumber(year) && value.getFullYear() === year,
);
