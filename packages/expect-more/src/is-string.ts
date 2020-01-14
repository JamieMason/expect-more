import { hasType } from './lib/has-type';

/**
 * Asserts that ${value} is a `String` or `new String()`.
 * @matcherName toBeString
 * @memberMatcherName toHaveString
 * @matcherMessage expected ${value} to be a string
 * @matcherNotMessage expected ${value} not to be a string
 */
export const isString = hasType<string>('String');
