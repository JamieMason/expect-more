import { isObject } from './is-object';
import { keys } from './lib/keys';

/**
 * Asserts that a value is an `Object` containing at least one own member.
 * @param value {} { i: 'am not empty' }
 * @matcherName toBeNonEmptyObject
 * @memberMatcherName toHaveNonEmptyObject
 * @matcherMessage expected ${value} to be an object with at least one own
 * member
 * @matcherNotMessage expected ${value} not to be an object with at least one
 * own member
 */
export const isNonEmptyObject = <T = any>(value: unknown): value is T =>
  isObject(value) && keys(value).length > 0;
