import { isNumber } from './is-number';
import { curry2 } from './lib/curry2';

/**
 * Asserts that ${value} is greater than or equal to ${otherNumber}.
 * @param otherNumber 5
 * @param value 10
 * @matcherName toBeGreaterThanOrEqualTo
 * @memberMatcherName toHaveGreaterThanOrEqualTo
 * @matcherMessage expected ${value} to be greater than or equal to
 * ${otherNumber}
 * @matcherNotMessage expected ${value} not to be greater than or equal to
 * ${otherNumber}
 */
export const isGreaterThanOrEqualTo = curry2(
  (otherNumber: number, value: unknown): value is number =>
    isNumber(value) && isNumber(otherNumber) && value >= otherNumber,
);
