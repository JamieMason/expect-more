import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in April.
 * @param value new Date('2021-01-12')
 * @matcherName toBeDateInApril
 * @memberMatcherName toHaveDateInApril
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * April
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in April
 */
export const isDateInApril = isDateInMonth(3);
