import { isNumber } from './is-number';
import { curry2 } from './lib/curry2';

/**
 * Asserts that a value is a `Number` which results in a whole number when
 * divided by another.
 * @param other 2
 * @param value 12
 * @matcherName toBeDivisibleBy
 * @memberMatcherName toHaveDivisibleBy
 * @matcherMessage expected ${value} to be divisible by ${other}
 * @matcherNotMessage expected ${value} not to be divisible by ${other}
 */
export const isDivisibleBy = curry2(
  (other: number, value: unknown): value is number =>
    isNumber(value) && isNumber(other) && value % other === 0,
);
