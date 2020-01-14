import { isBoolean } from './is-boolean';

/**
 * Asserts that ${value} is `true` or `new Boolean(true)`.
 * @matcherName toBeTrue
 * @memberMatcherName toHaveTrue
 * @matcherMessage expected ${value} to be true or Boolean(true)
 * @matcherNotMessage expected ${value} not to be true or Boolean(true)
 */
export const isTrue = (value: any): value is true => value === true || (isBoolean(value) && value.valueOf() === true);
