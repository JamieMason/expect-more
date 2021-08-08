import { curry2 } from './lib/curry2';
import { isIndexedList } from './lib/is-indexed-list';

/**
 * Asserts that ${value} is a `String` or `Array` whose length is greater than
 * that of ${otherStringOrArray}.
 * @param otherStringOrArray [2, 'items']
 * @param value ['i', 'have', 3]
 * @matcherName toBeLongerThan
 * @memberMatcherName toHaveLongerThan
 * @matcherMessage expected ${value} to be a string or array whose length is
 * greater than that of ${otherStringOrArray}
 * @matcherNotMessage expected ${value} not to be a string or array whose length
 * is greater than that of ${otherStringOrArray}
 */
export const isLongerThan = curry2<string | any[]>(
  (otherStringOrArray: string | any[], value: unknown): value is string | any[] =>
    isIndexedList(value) &&
    isIndexedList(otherStringOrArray) &&
    value.length > otherStringOrArray.length,
);
