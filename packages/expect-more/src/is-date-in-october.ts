import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in October.
 * @param value new Date('2021-01-12')
 * @matcherName toBeDateInOctober
 * @memberMatcherName toHaveDateInOctober
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * October
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in October
 */
export const isDateInOctober = isDateInMonth(9);
