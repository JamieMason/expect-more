import { isObject } from './is-object';
import { keys } from './lib/keys';

/**
 * Asserts that a value is a valid `Object` containing no instance members.
 * @param value {} {}
 * @matcherName toBeEmptyObject
 * @memberMatcherName toHaveEmptyObject
 * @matcherMessage expected ${value} to be an empty object
 * @matcherNotMessage expected ${value} not to be an empty object
 */
export const isEmptyObject = <T extends Record<string, unknown>>(value: unknown): value is T =>
  isObject(value) && keys(value).length === 0;
