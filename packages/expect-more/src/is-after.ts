import { isDate } from './is-date';
import { curry2 } from './lib/curry2';

/**
 * Asserts that ${value} is a valid instance of `Date` whose value occurs after
 * that of ${otherDate}.
 * @param otherDate new Date('2019-12-31')
 * @param value new Date('2020-01-01')
 * @matcherName toBeAfter
 * @memberMatcherName toHaveDateAfter
 * @matcherMessage expected ${value} to be an instance of Date, occurring after
 * ${otherDate}
 * @matcherNotMessage expected ${value} not to be an instance of Date, occurring
 * after ${otherDate}
 */
export const isAfter = curry2(
  (otherDate: Date, value: unknown): value is Date =>
    isDate(value) && isDate(otherDate) && value.getTime() > otherDate.getTime(),
);
