import { hasType } from './lib/has-type';

/**
 * Asserts that ${value} is a valid `Array` containing none or any number of
 * items of any type.
 * @matcherName toBeArray
 * @memberMatcherName toHaveArray
 * @matcherMessage expected ${value} to be an array
 * @matcherNotMessage expected ${value} not to be an array
 */
export const isArray = hasType<any[]>('Array');
