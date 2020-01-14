import { isArray } from './is-array';
import { isString } from './is-string';
import { every } from './lib/every';

/**
 * Asserts that ${value} is an `Array` containing only `String` values.
 * @param value ['we', 'are', 'all', 'strings']
 * @matcherName toBeArrayOfStrings
 * @memberMatcherName toHaveArrayOfStrings
 * @matcherMessage expected ${value} to be a non-empty array, containing only
 * strings
 * @matcherNotMessage expected ${value} not to be a non-empty array, containing
 * only strings
 */
export const isArrayOfStrings = (value: any): value is string[] => isArray(value) && every(isString, value);
