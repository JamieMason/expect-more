import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in December.
 * @param value new Date('2021-12-12')
 * @matcherName toBeDateInDecember
 * @memberMatcherName toHaveDateInDecember
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * December
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in December
 */
export const isDateInDecember = isDateInMonth(11);
