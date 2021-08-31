import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in November.
 * @param value new Date('2021-11-12')
 * @matcherName toBeDateInNovember
 * @memberMatcherName toHaveDateInNovember
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * November
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in November
 */
export const isDateInNovember = isDateInMonth(10);
