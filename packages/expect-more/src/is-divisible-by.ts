import { isNumber } from './is-number';
import { curry2 } from './lib/curry2';

/**
 * Asserts that ${value} is a `Number` which results in a whole number when
 * divided by ${otherNumber}.
 * @param otherNumber 2
 * @param value 12
 * @matcherName toBeDivisibleBy
 * @memberMatcherName toHaveDivisibleBy
 * @matcherMessage expected ${value} to be divisible by ${otherNumber}
 * @matcherNotMessage expected ${value} not to be divisible by ${otherNumber}
 */
export const isDivisibleBy = curry2(
  (otherNumber: number, value: unknown): value is number =>
    isNumber(value) && isNumber(otherNumber) && value % otherNumber === 0,
);
