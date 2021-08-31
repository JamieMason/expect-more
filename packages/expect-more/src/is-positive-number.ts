import { isNumber } from './is-number';

/**
 * Asserts that a value is a `Number` greater than 0.
 * @param value 5
 * @matcherName toBePositiveNumber
 * @memberMatcherName toHavePositiveNumber
 * @matcherMessage expected ${value} to be a positive number
 * @matcherNotMessage expected ${value} not to be a positive number
 */
export const isPositiveNumber = (value: unknown): value is number => isNumber(value) && value > 0;
