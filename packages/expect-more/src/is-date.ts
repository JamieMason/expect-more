import { hasType } from './lib/has-type';

/**
 * Asserts that ${value} is an instance of `Date`.
 * @matcherName toBeDate
 * @memberMatcherName toHaveDate
 * @matcherMessage expected ${value} to be an instance of Date
 * @matcherNotMessage expected ${value} not to be an instance of Date
 */
export const isDate = hasType<Date>('Date');
