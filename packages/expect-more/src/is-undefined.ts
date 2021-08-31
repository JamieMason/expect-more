import { hasType } from './lib/has-type';

/**
 * Asserts that a value is `undefined`
 * @param value undefined
 * @matcherName toBeUndefined
 * @memberMatcherName toHaveUndefined
 * @matcherMessage expected ${value} to be undefined
 * @matcherNotMessage expected ${value} not to be undefined
 */
export const isUndefined = hasType<undefined>('Undefined');
