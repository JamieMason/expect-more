import { isArrayOfSize } from './is-array-of-size';

/**
 * Asserts that ${value} is a valid `Array` containing no items.
 * @param value []
 * @matcherName toBeEmptyArray
 * @memberMatcherName toHaveEmptyArray
 * @matcherMessage expected ${value} to be an array containing no items
 * @matcherNotMessage expected ${value} not to be an array containing no items
 */
export const isEmptyArray = (value: any): boolean => isArrayOfSize(0, value);
