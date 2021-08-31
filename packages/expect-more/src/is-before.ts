import { isAfter } from './is-after';
import { curry2 } from './lib/curry2';

/**
 * Asserts that a value is a valid instance of `Date` whose value occurs before
 * that of another.
 * @param other new Date('2020-01-01')
 * @param value new Date('2019-12-31')
 * @matcherName toBeBefore
 * @memberMatcherName toHaveDateBefore
 * @matcherMessage expected ${value} to be an instance of Date, occurring before
 * ${other}
 * @matcherNotMessage expected ${value} not to be an instance of Date, occurring
 * before ${other}
 */
export const isBefore = curry2((other: Date, value: unknown): value is Date =>
  isAfter(value, other),
);
