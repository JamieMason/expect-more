import { isArray } from './is-array';

/**
 * Asserts that a value is an `Array` containing at least one value.
 * @param value ['i', 'am not empty']
 * @matcherName toBeNonEmptyArray
 * @memberMatcherName toHaveNonEmptyArray
 * @matcherMessage expected ${value} to be an array with at least one item
 * @matcherNotMessage expected ${value} not to be an array with at least one
 * item
 */
export const isNonEmptyArray = <T extends any[] = any[]>(value: unknown): value is T =>
  isArray(value) && value.length > 0;
