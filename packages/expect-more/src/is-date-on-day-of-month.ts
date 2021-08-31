import { isDate } from './is-date';
import { isNumber } from './is-number';
import { curry2 } from './lib/curry2';

/**
 * Asserts that a value is an instance of `Date` occurring on the given day of
 * the month, where the first day of the month is `1` and last is `31`.
 * @param dayOfMonth 29
 * @param value new Date('2021-08-29')
 * @matcherName toBeDateOnDayOfMonth
 * @memberMatcherName toHaveDateOnDayOfMonth
 * @matcherMessage expected ${value} to be an instance of Date occurring on the
 * ${dayOfMonth} day of the month
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on the ${dayOfMonth} day of the month
 */
export const isDateOnDayOfMonth = curry2(
  (dayOfMonth: number, value: unknown): value is Date =>
    isDate(value) && isNumber(dayOfMonth) && value.getDate() === dayOfMonth,
);
