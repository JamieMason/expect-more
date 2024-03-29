import { hasType } from './lib/has-type';

/**
 * Asserts that a value is a valid `Array` containing none or any number of
 * items of any type.
 * @param value [2, true, 'string']
 * @matcherName toBeArray
 * @memberMatcherName toHaveArray
 * @matcherMessage expected ${value} to be an array
 * @matcherNotMessage expected ${value} not to be an array
 */
export const isArray = hasType<any[]>('Array');
