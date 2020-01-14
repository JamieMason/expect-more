import { isObject } from './is-object';
import { keys } from './lib/keys';

/**
 * Asserts that ${value} is a valid `Object` containing no instance members.
 * @matcherName toBeEmptyObject
 * @memberMatcherName toHaveEmptyObject
 * @matcherMessage expected ${value} to be an empty object
 * @matcherNotMessage expected ${value} not to be an empty object
 */
export const isEmptyObject = (value: any): boolean => isObject(value) && keys(value).length === 0;
