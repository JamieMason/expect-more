import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in March.
 * @param value new Date('2021-03-12')
 * @matcherName toBeDateInMarch
 * @memberMatcherName toHaveDateInMarch
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * March
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in March
 */
export const isDateInMarch = isDateInMonth(2);
