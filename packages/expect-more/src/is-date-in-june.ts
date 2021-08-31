import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in June.
 * @param value new Date('2021-01-12')
 * @matcherName toBeDateInJune
 * @memberMatcherName toHaveDateInJune
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * June
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in June
 */
export const isDateInJune = isDateInMonth(5);
