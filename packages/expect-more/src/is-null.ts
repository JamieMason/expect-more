import { hasType } from './lib/has-type';

/**
 * Asserts that ${value} is null
 * @param value null
 * @matcherName toBeNull
 * @memberMatcherName toHaveNull
 * @matcherMessage expected ${value} to be is null
 * @matcherNotMessage expected ${value} not to be is null
 */
export const isNull = hasType<null>('Null');
