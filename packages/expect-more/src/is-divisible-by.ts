import { isNumber } from './is-number';
import { curry } from './lib/curry';

/**
 * Asserts that ${value} is a `Number` divisible by ${otherNumber}.
 * @matcherName toBeDivisibleBy
 * @memberMatcherName toHaveDivisibleBy
 * @matcherMessage expected ${value} to be divisible by ${otherNumber}
 * @matcherNotMessage expected ${value} not to be divisible by ${otherNumber}
 */
export const isDivisibleBy: {
  (otherNumber: number, value: any): boolean;
  (otherNumber: number): (value: any) => boolean;
} = curry((otherNumber, value) => isNumber(value) && isNumber(otherNumber) && value % otherNumber === 0);
