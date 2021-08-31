import { isNumber } from './is-number';
import { curry2 } from './lib/curry2';

/**
 * Asserts that a value is less than or equal to another.
 * @param other 12
 * @param value 8
 * @matcherName toBeLessThanOrEqualTo
 * @memberMatcherName toHaveLessThanOrEqualTo
 * @matcherMessage expected ${value} to be less than or equal to ${other}
 * @matcherNotMessage expected ${value} not to be less than or equal to ${other}
 */
export const isLessThanOrEqualTo = curry2(
  (other: number, value: unknown): value is number =>
    isNumber(value) && isNumber(other) && value <= other,
);
