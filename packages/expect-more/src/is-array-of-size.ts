import { isArray } from './is-array';
import { isNumber } from './is-number';
import { curry2 } from './lib/curry2';

/**
 * Asserts that a value is an `Array` containing a specific number of values.
 * @param size 4
 * @param value ['i', 'contain', 4, 'items']
 * @matcherName toBeArrayOfSize
 * @memberMatcherName toHaveArrayOfSize
 * @matcherMessage expected ${value} to be an array containing exactly ${size}
 * items
 * @matcherNotMessage expected ${value} not to be an array containing exactly
 * ${size} items
 */
export const isArrayOfSize = curry2(
  (size: number, value: unknown): value is any[] =>
    isArray(value) && isNumber(size) && value.length === size,
);
