import { isArray } from './is-array';
import { isObject } from './is-object';
import { every } from './lib/every';

/**
 * Asserts that ${value} is an `Array` containing only `Object` values.
 * @matcherName toBeArrayOfObjects
 * @memberMatcherName toHaveArrayOfObjects
 * @matcherMessage expected ${value} to be a non-empty array, containing only
 * objects
 * @matcherNotMessage expected ${value} not to be a non-empty array, containing
 * only objects
 */
export const isArrayOfObjects = (value: any): value is object[] => isArray(value) && every(isObject, value);
