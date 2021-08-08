import { isDivisibleBy } from './is-divisible-by';
import { isNumber } from './is-number';

/**
 * Asserts that ${value} is an odd `Number`.
 * @param value 5
 * @matcherName toBeOddNumber
 * @memberMatcherName toHaveOddNumber
 * @matcherMessage expected ${value} to be an odd number
 * @matcherNotMessage expected ${value} not to be an odd number
 */
export const isOddNumber = (value: unknown): value is number =>
  isNumber(value) && !isDivisibleBy(2, value);
