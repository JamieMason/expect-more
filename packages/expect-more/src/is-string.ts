import { hasType } from './lib/has-type';

/**
 * Asserts that a value is a `String` or `new String()`.
 * @param value 'i am a string'
 * @matcherName toBeString
 * @memberMatcherName toHaveString
 * @matcherMessage expected ${value} to be a string
 * @matcherNotMessage expected ${value} not to be a string
 */
export const isString = hasType<string>('String');
