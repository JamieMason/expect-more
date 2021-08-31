import { isNumber } from './is-number';

/**
 * Asserts that a value is a `Number` less than 0.
 * @param value -18
 * @matcherName toBeNegativeNumber
 * @memberMatcherName toHaveNegativeNumber
 * @matcherMessage expected ${value} to be a negative number
 * @matcherNotMessage expected ${value} not to be a negative number
 */
export const isNegativeNumber = (value: unknown): value is number => isNumber(value) && value < 0;
