import { hasType } from './lib/has-type';

/**
 * Asserts that a value is an instance of `Date`.
 * @param value new Date('2019-12-31')
 * @matcherName toBeDate
 * @memberMatcherName toHaveDate
 * @matcherMessage expected ${value} to be an instance of Date
 * @matcherNotMessage expected ${value} not to be an instance of Date
 */
export const isDate = hasType<Date>('Date');
