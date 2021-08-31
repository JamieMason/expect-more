import { hasType } from './lib/has-type';

/**
 * Asserts that a value is `null`.
 * @param value null
 * @matcherName toBeNull
 * @memberMatcherName toHaveNull
 * @matcherMessage expected ${value} to be null
 * @matcherNotMessage expected ${value} not to be null
 */
export const isNull = hasType<null>('Null');
