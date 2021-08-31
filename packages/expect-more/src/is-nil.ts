import { isNull } from './is-null';
import { isUndefined } from './is-undefined';

/**
 * Asserts that a value is `null` or `undefined`
 * @param value undefined
 * @matcherName toBeNil
 * @memberMatcherName toHaveNil
 * @matcherMessage expected ${value} to be null or undefined
 * @matcherNotMessage expected ${value} not to be null or undefined
 */
export const isNil = (value: unknown): value is undefined | null =>
  isNull(value) || isUndefined(value);
