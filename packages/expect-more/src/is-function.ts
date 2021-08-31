import { AnyFn } from './typings';

/**
 * Asserts that a value is a `Function`.
 * @param value () => 'i am a function'
 * @matcherName toBeFunction
 * @memberMatcherName toHaveMethod
 * @matcherMessage expected ${value} to be a function or async function
 * @matcherNotMessage expected ${value} not to be a function or async function
 */
export const isFunction = <T extends AnyFn = AnyFn>(value: unknown): value is T =>
  typeof value === 'function';
