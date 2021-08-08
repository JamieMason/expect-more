import { isDivisibleBy } from './is-divisible-by';
import { isNumber } from './is-number';

/**
 * Asserts that ${value} is a `Number` with no positive decimal places.
 * @param value 8
 * @matcherName toBeWholeNumber
 * @memberMatcherName toHaveWholeNumber
 * @matcherMessage expected ${value} to be a whole number
 * @matcherNotMessage expected ${value} not to be a whole number
 */
export const isWholeNumber = (value: unknown): value is number =>
  isNumber(value) && (value === 0 || isDivisibleBy(1, value));
