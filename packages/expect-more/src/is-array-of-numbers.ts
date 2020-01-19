import { isArray } from './is-array';
import { isNumber } from './is-number';
import { every } from './lib/every';

/**
 * Asserts that ${value} is an `Array` containing only `Number` values.
 * @param value [12, 0, 14]
 * @matcherName toBeArrayOfNumbers
 * @memberMatcherName toHaveArrayOfNumbers
 * @matcherMessage expected ${value} to be a non-empty array, containing only
 * numbers
 * @matcherNotMessage expected ${value} not to be a non-empty array, containing
 * only numbers
 */
export const isArrayOfNumbers = (value: any): value is number[] =>
  isArray(value) && every(isNumber, value);
