import { hasType } from './lib/has-type';

/**
 * Asserts that a value is an `Object`.
 * @param value {} {}
 * @matcherName toBeObject
 * @memberMatcherName toHaveObject
 * @matcherMessage expected ${value} to be an object
 * @matcherNotMessage expected ${value} not to be an object
 */
export const isObject = hasType<any>('Object');
