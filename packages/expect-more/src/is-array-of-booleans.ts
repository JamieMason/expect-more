import { isArray } from './is-array';
import { isBoolean } from './is-boolean';
import { every } from './lib/every';

/**
 * Asserts that a value is an `Array` containing only `Boolean` values.
 * @param value [true, false, new Boolean(true)]
 * @matcherName toBeArrayOfBooleans
 * @memberMatcherName toHaveArrayOfBooleans
 * @matcherMessage expected ${value} to be a non-empty array, containing only
 * boolean values
 * @matcherNotMessage expected ${value} not to be a non-empty array, containing
 * only boolean values
 */
export const isArrayOfBooleans = (value: unknown): value is boolean[] =>
  isArray(value) && every(isBoolean, value);
