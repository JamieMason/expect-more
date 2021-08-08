import { isArray } from './is-array';
import { isObject } from './is-object';
import { every } from './lib/every';

/**
 * Asserts that ${value} is an `Array` containing only `Object` values.
 * @param value [{}, new Object()]
 * @matcherName toBeArrayOfObjects
 * @memberMatcherName toHaveArrayOfObjects
 * @matcherMessage expected ${value} to be a non-empty array, containing only
 * objects
 * @matcherNotMessage expected ${value} not to be a non-empty array, containing
 * only objects
 */
export const isArrayOfObjects = <T extends any[] = any[]>(value: unknown): value is T =>
  isArray(value) && every(isObject, value);
