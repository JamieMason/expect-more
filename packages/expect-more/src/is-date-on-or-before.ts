import { isDate } from './is-date';
import { isLessThanOrEqualTo } from './is-less-than-or-equal-to';
import { curry2 } from './lib/curry2';

/**
 * Asserts that a value is an instance of `Date` occurring on or before the exact
 * date and time of another.
 * @param other new Date('2019-12-31')
 * @param value new Date('2019-12-15')
 * @matcherName toBeDateOnOrBefore
 * @memberMatcherName toHaveDateOnOrBefore
 * @matcherMessage expected ${value} to be an instance of Date occurring on or
 * before ${other}
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on or before ${other}
 */
export const isDateOnOrBefore = curry2(
  (other: unknown, value: unknown): value is Date =>
    isDate(value) && isDate(other) && isLessThanOrEqualTo(other.getTime(), value.getTime()),
);
