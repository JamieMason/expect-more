import { isBoolean } from './is-boolean';

/**
 * Asserts that a value is `false` or `new Boolean(false)`.
 * @param value false
 * @matcherName toBeFalse
 * @memberMatcherName toHaveFalse
 * @matcherMessage expected ${value} to be false or Boolean(false)
 * @matcherNotMessage expected ${value} not to be false or Boolean(false)
 */
export const isFalse = (value: unknown): value is false =>
  value === false || (isBoolean(value) && value.valueOf() === false);
