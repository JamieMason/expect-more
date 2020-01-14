import { isArray } from './is-array';

/**
 * Asserts that ${value} is an `Array` containing at least one value.
 * @param value ['i', 'am not empty']
 * @matcherName toBeNonEmptyArray
 * @memberMatcherName toHaveNonEmptyArray
 * @matcherMessage expected ${value} to be an array with at least one item
 * @matcherNotMessage expected ${value} not to be an array with at least one
 * item
 */
export const isNonEmptyArray = (value: any): boolean => isArray(value) && value.length > 0;
