import { curry2 } from './lib/curry2';
import { isIndexedList } from './lib/is-indexed-list';

/**
 * Asserts that a value is a `String` or `Array` whose length is the same as
 * that of the other provided.
 * @param other ['i have', '2 items']
 * @param value ['i also have', '2 items']
 * @matcherName toBeSameLengthAs
 * @memberMatcherName toHaveSameLengthAs
 * @matcherMessage expected ${value} to be a string or array whose length is the
 * same as that of ${other}
 * @matcherNotMessage expected ${value} not to be a string or array whose length
 * is the same as that of ${other}
 */
export const isSameLengthAs = curry2<string | any[]>(
  (other: string | any[], value: unknown): value is string | any[] =>
    isIndexedList(value) && isIndexedList(other) && value.length === other.length,
);
