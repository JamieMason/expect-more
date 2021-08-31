import { curry2 } from './lib/curry2';
import { isIndexedList } from './lib/is-indexed-list';

/**
 * Asserts that a value is a `String` or `Array` whose length is less than that
 * of the other provided.
 * @param other ['i', 'have', 4, 'items']
 * @param value ['i have one item']
 * @matcherName toBeShorterThan
 * @memberMatcherName toHaveShorterThan
 * @matcherMessage expected ${value} to be a string or array whose length is
 * less than that of ${other}
 * @matcherNotMessage expected ${value} not to be a string or array whose length
 * is less than that of ${other}
 */
export const isShorterThan = curry2<string | any[]>(
  (other: string | any[], value: unknown): value is string | any[] =>
    isIndexedList(value) && isIndexedList(other) && value.length < other.length,
);
