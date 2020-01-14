import { isObject } from './is-object';
import { keys } from './lib/keys';

/**
 * Asserts that ${value} is an `Object` containing at least one own member.
 * @matcherName toBeNonEmptyObject
 * @memberMatcherName toHaveNonEmptyObject
 * @matcherMessage expected ${value} to be an object with at least one own
 * member
 * @matcherNotMessage expected ${value} not to be an object with at least one
 * own member
 */
export const isNonEmptyObject = (value: any): boolean => isObject(value) && keys(value).length > 0;
