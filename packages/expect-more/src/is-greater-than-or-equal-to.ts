import { isNumber } from './is-number';
import { curry2 } from './lib/curry2';

/**
 * Asserts that a value is greater than or equal to ${other}.
 * @param other 5
 * @param value 10
 * @matcherName toBeGreaterThanOrEqualTo
 * @memberMatcherName toHaveGreaterThanOrEqualTo
 * @matcherMessage expected ${value} to be greater than or equal to ${other}
 * @matcherNotMessage expected ${value} not to be greater than or equal to
 * ${other}
 */
export const isGreaterThanOrEqualTo = curry2(
  (other: number, value: unknown): value is number =>
    isNumber(value) && isNumber(other) && value >= other,
);
