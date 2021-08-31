import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in May.
 * @param value new Date('2021-05-12')
 * @matcherName toBeDateInMay
 * @memberMatcherName toHaveDateInMay
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * May
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in May
 */
export const isDateInMay = isDateInMonth(4);
