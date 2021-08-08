import { isAfter } from './is-after';
import { curry2 } from './lib/curry2';

/**
 * Asserts that ${value} is a valid instance of `Date` whose value occurs before
 * that of ${otherDate}.
 * @param otherDate new Date('2020-01-01')
 * @param value new Date('2019-12-31')
 * @matcherName toBeBefore
 * @memberMatcherName toHaveDateBefore
 * @matcherMessage expected ${value} to be an instance of Date, occurring before
 * ${otherDate}
 * @matcherNotMessage expected ${value} not to be an instance of Date, occurring
 * before ${otherDate}
 */
export const isBefore = curry2((otherDate: Date, value: unknown): value is Date =>
  isAfter(value, otherDate),
);
