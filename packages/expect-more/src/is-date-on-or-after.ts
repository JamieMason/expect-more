import { isDate } from './is-date';
import { isGreaterThanOrEqualTo } from './is-greater-than-or-equal-to';
import { curry2 } from './lib/curry2';

/**
 * Asserts that a value is an instance of `Date` occurring on or after the exact
 * date and time of another.
 * @param other new Date('2019-12-15')
 * @param value new Date('2019-12-31')
 * @matcherName toBeDateOnOrAfter
 * @memberMatcherName toHaveDateOnOrAfter
 * @matcherMessage expected ${value} to be an instance of Date occurring on or
 * after ${other}
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on or after ${other}
 */
export const isDateOnOrAfter = curry2(
  (other: unknown, value: unknown): value is Date =>
    isDate(value) && isDate(other) && isGreaterThanOrEqualTo(other.getTime(), value.getTime()),
);
