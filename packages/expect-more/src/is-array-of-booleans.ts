import { isArray } from './is-array';
import { isBoolean } from './is-boolean';
import { every } from './lib/every';

/**
 * Asserts that ${value} is an `Array` containing only `Boolean` values.
 * @matcherName toBeArrayOfBooleans
 * @memberMatcherName toHaveArrayOfBooleans
 * @matcherMessage expected ${value} to be a non-empty array, containing only
 * boolean values
 * @matcherNotMessage expected ${value} not to be a non-empty array, containing
 * only boolean values
 */
export const isArrayOfBooleans = (value: any): value is boolean[] => isArray(value) && every(isBoolean, value);
