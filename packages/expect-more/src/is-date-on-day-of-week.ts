import { isDate } from './is-date';
import { isNumber } from './is-number';
import { curry2 } from './lib/curry2';

/**
 * Asserts that a value is an instance of `Date` occurring on the day of the
 * week with the given index, where Sunday is `0` and Saturday is `6`.
 * @param index 0
 * @param value new Date('2021-08-29')
 * @matcherName toBeDateOnDayOfWeek
 * @memberMatcherName toHaveDateOnDayOfWeek
 * @matcherMessage expected ${value} to be an instance of Date occurring on the
 * day of the week with index ${index}
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on the day of the week with index ${index}
 */
export const isDateOnDayOfWeek = curry2(
  (index: number, value: unknown): value is Date =>
    isDate(value) && isNumber(index) && value.getDay() === index,
);
