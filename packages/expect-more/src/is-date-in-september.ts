import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in September.
 * @param value new Date('2021-09-12')
 * @matcherName toBeDateInSeptember
 * @memberMatcherName toHaveDateInSeptember
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * September
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in September
 */
export const isDateInSeptember = isDateInMonth(8);
