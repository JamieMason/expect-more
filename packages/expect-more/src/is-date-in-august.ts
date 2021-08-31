import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in August.
 * @param value new Date('2021-08-12')
 * @matcherName toBeDateInAugust
 * @memberMatcherName toHaveDateInAugust
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * August
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in August
 */
export const isDateInAugust = isDateInMonth(7);
