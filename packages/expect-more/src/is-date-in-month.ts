import { isDate } from './is-date';
import { isNumber } from './is-number';
import { curry2 } from './lib/curry2';

/**
 * Asserts that a value is an instance of `Date` occurring on the given month of
 * the year, where January is `0` and December is `11`.
 * @param index 7
 * @param value new Date('2021-08-29')
 * @matcherName toBeDateInMonth
 * @memberMatcherName toHaveDateInMonth
 * @matcherMessage expected ${value} to be an instance of Date occurring on the
 * month of the year with index ${index}
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on the month of the year with index ${index}
 */
export const isDateInMonth = curry2(
  (index: number, value: unknown): value is Date =>
    isDate(value) && isNumber(index) && value.getMonth() === index,
);
