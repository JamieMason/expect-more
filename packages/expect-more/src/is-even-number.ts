import { isDivisibleBy } from './is-divisible-by';
import { isNumber } from './is-number';

/**
 * Asserts that a value is an even `Number`.
 * @param value 2
 * @matcherName toBeEvenNumber
 * @memberMatcherName toHaveEvenNumber
 * @matcherMessage expected ${value} to be an even number
 * @matcherNotMessage expected ${value} not to be an even number
 */
export const isEvenNumber = (value: unknown): value is number =>
  isNumber(value) && isDivisibleBy(2, value);
