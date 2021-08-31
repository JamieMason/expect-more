import { curry2 } from './lib/curry2';
import { isIndexedList } from './lib/is-indexed-list';

/**
 * Asserts that a value is a `String` or `Array` whose length is greater than
 * that of another.
 * @param other [2, 'items']
 * @param value ['i', 'have', 3]
 * @matcherName toBeLongerThan
 * @memberMatcherName toHaveLongerThan
 * @matcherMessage expected ${value} to be a string or array whose length is
 * greater than that of ${other}
 * @matcherNotMessage expected ${value} not to be a string or array whose length
 * is greater than that of ${other}
 */
export const isLongerThan = curry2<string | any[]>(
  (other: string | any[], value: unknown): value is string | any[] =>
    isIndexedList(value) && isIndexedList(other) && value.length > other.length,
);
