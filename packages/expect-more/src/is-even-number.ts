import { isDivisibleBy } from './is-divisible-by';
import { isNumber } from './is-number';

/**
 * Asserts that ${value} is an even `Number`.
 * @param value 2
 * @matcherName toBeEvenNumber
 * @memberMatcherName toHaveEvenNumber
 * @matcherMessage expected ${value} to be an even number
 * @matcherNotMessage expected ${value} not to be an even number
 */
export const isEvenNumber = (value: any): boolean => isNumber(value) && isDivisibleBy(2, value);
