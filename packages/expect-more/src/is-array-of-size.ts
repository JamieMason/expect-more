import { isArray } from './is-array';
import { isNumber } from './is-number';
import { curry } from './lib/curry';

/**
 * Asserts that ${value} is an `Array` containing ${size} number of values.
 * @param size 4
 * @param value ['i', 'contain', 4, 'items']
 * @matcherName toBeArrayOfSize
 * @memberMatcherName toHaveArrayOfSize
 * @matcherMessage expected ${value} to be an array containing exactly ${size}
 * items
 * @matcherNotMessage expected ${value} not to be an array containing exactly
 * ${size} items
 */
export const isArrayOfSize: {
  (size: number, value: any): value is any[];
  (size: number): (value: any) => value is any[];
} = curry((size, value) => isArray(value) && isNumber(size) && value.length === size);
