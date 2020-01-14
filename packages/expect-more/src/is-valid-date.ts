import { isDate } from './is-date';

/**
 * Asserts that ${value} is an instance of `Date` whose internal value is valid.
 * `Date` is little like `Promise` in that it is a container for a value. For
 * example, `new Date('wut?')` is a valid `Date` which wraps a value that is not
 * valid.
 * @matcherName toBeValidDate
 * @memberMatcherName toHaveValidDate
 * @matcherMessage expected ${value} to be an instance of Date with a valid
 * value
 * @matcherNotMessage expected ${value} not to be an instance of Date with a
 * valid value
 */
export const isValidDate = (value: any): value is Date => isDate(value) && !isNaN(value.getTime());
