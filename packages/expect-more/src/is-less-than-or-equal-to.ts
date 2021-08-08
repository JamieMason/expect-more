import { isNumber } from './is-number';
import { curry2 } from './lib/curry2';

/**
 * Asserts that ${value} is less than or equal to ${otherNumber}.
 * @param otherNumber 12
 * @param value 8
 * @matcherName toBeLessThanOrEqualTo
 * @memberMatcherName toHaveLessThanOrEqualTo
 * @matcherMessage expected ${value} to be less than or equal to ${otherNumber}
 * @matcherNotMessage expected ${value} not to be less than or equal to
 * ${otherNumber}
 */
export const isLessThanOrEqualTo = curry2(
  (otherNumber: number, value: unknown): value is number =>
    isNumber(value) && isNumber(otherNumber) && value <= otherNumber,
);
